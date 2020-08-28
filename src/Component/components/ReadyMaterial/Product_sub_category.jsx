import React from 'react'
import Navbar from '../../Navbar/Navbar'
import SubCat_edit_modal from './SubCat_edit_modal'
import axios from 'axios'
import { useEffect } from 'react'
const Product_sub_category =()=> {
  let [formData,setFormData] = React.useState({});
  let [tableData,setTableData] = React.useState([]);
  let onChange = (e)=>{
    const {name,value} = e.currentTarget;
    setFormData(state=>({
      ...state,
      [name]:value
      }
    ))
  }
  let loadTableData = ()=>{
    axios.get('/ready_stocks').then((res)=>{ console.log(res.data); setTableData(res.data.ready_products)})
  }
  // for dropdown select options
  const [productCategoris,setProductCategoris] = React.useState([]);
    let getProductCategoris = ()=>{
      axios.get('/product_category').then((res)=>{
        let {product_categories} = res.data
        console.log(product_categories);
        setProductCategoris(product_categories);
      })
    } 
    let deleteSubCategory = (id)=>{
      axios.delete(`ready_stocks/${id}`).then((res)=>{
        console.log(res.data);
        loadTableData();
      }).catch((err)=>{  console.log(err); })
    }
    useEffect(()=>{
      getProductCategoris();
      loadTableData();
    },[])
    const handleSubmit = (e)=>{
      e.preventDefault();
      //  product sub category 
      axios.post('/ready_stocks',{ready_product:formData}).then((res)=>{ console.log(res.data); loadTableData() }).catch((err)=>{ console.log(err); })
    }
    return (
        <>
        <Navbar />
        <div className="main-footer">
        <div className="container-fluid">
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Add Product Sub Category</h3>
              </div>
              
              <form className="form-horizontal" onSubmit={handleSubmit} >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">

                    <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
	                    <label for="default-outline-select" className=" col-sm-10 col-form-label">Product Category</label>
	                    <select  id="default-outline-select" name="product_category_id" class="form-control col-sm-10" value={formData['product_category_id']||'none'} onChange={onChange}  >
	                  	 <option disabled value="none">Select</option>
	                  	 {
                         productCategoris.map((product_category)=>(
                         <option value={product_category.id} >{product_category.category_name}</option>
                         ))
                       }
                    	</select>
                      </div>  

                    <div className="form-group row">
                    <label for="product_name" className=" col-sm-10 col-form-label">Sub Category Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="product_name" placeholder="Sub Category Name" onChange={onChange} value={formData['product_name']}/>
                    </div>
                    </div>
                  </div>  
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" onClick={handleSubmit} >Add Sub Category</button>
                  <button type="submit" className="btn btn-default ml-4 cancle">Cancel</button>
                </div>
              </form>
            </div>
        </div>       
       

        {/* Add Sub Category */}
          {/* Material Table */}
          <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Product Sub Category</h3>
            </div>
            
            <div className="card-body">
              <table id="example1" className="table table-responsive-lg table-striped bg-white">
                <thead >
                    <tr>
                      <th style={{width:'200px'}}>Sr. No.</th>
                      <th>Product Sub Category</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    tableData.map((ready_product)=>(
                  <tr>
                      <td>{ready_product.product_category_id}</td>
                    <td>{ready_product.product_name}</td>
                      <td><i class="fas fa-edit btn btn-success btn-xs"  data-id={ready_product.product_id} data-toggle="modal" data-target="#SubCategoryModal"> Edit</i>
                       <button className="btn btn-danger btn-xs ml-3" onClick={()=>deleteSubCategory(ready_product.product_id)}><i class="fas fa-trash"></i> Delete</button></td>
                 </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
           
          </div>
        </div>

        {/* Sub Category Edit Modal*/}
        <SubCat_edit_modal cb={loadTableData} />
        </>
    )
}

export default Product_sub_category
