import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Cat_edit_modal from './Cat_edit_modal'
import axios from 'axios'
import { useEffect } from 'react'
import $ from 'jquery'
const Product_category =()=> {
  const [formData,setFormData] = React.useState({});
  const [tableData,setTableData] = React.useState([]);
  const onChange = (e)=>{
    const {name,value} = e.currentTarget;
    setFormData(state=>({
      ...state,
      [name]:value
    }))
  }
  let loadTableData = ()=>{
    axios.get('/product_category').then((res)=>{
      const {product_categories} = res.data;
      setTableData(product_categories);
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('/product_category',{product_category:formData}).then((res)=>{
      console.log(res.data);
      setFormData({});
      loadTableData();
    }).catch(err=>{ console.log(err); })
  }
  useEffect(()=>{ 
    loadTableData();
    $('#add-vendor').hide();
    $('#addVendorBtn').click(()=>{
      $('#add-vendor').slideToggle();
    })

   },[])
    return (
        <>
        <Navbar />
        <div className="main-footer">
        <div className="container-fluid">
        <button className="btn btn-danger  mb-5" id="addVendorBtn">
            Add New
          </button>
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Add Product Category</h3>
              </div>
              <form className="form-horizontal" onSubmit={handleSubmit} >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">

                    <div className="form-group row">
                    <label for="category_name" className=" col-sm-10 col-form-label">Category Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="category_name" placeholder="Category Name" value={formData['category_name']} onChange={onChange}/>
                    </div>
                    </div>

                  </div>  
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" onClick={handleSubmit} >Add Category</button>
                  <button type="submit" className="btn btn-default ml-4 cancle">Cancel</button>
                </div>
              </form>
            </div>
        </div>       
       

        
          {/* Material Table */}
          <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Product Category</h3>
            </div>
            
            <div className="card-body">
              <table id="example1" className="table table-responsive-lg table-striped bg-white">
                <thead >
                    <tr>
                      <th style={{width:'200px'}}>Sr. No.</th>
                      <th>Product Category</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    tableData.map((product=>(
                <tr key={product.id}>
                  <td>{product.id}</td>
                    <td>{product.category_name}</td>
                     <td><i class="fas fa-edit btn btn-success btn-xs" data-id={product.id} data-toggle="modal" data-target="#CategoryModal"> Edit</i>
                      <button className="btn btn-danger btn-xs ml-3"><i class="fas fa-trash"></i> Delete</button>
                     </td>
                </tr>
                    )))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Update Modal */}
        <Cat_edit_modal cb={loadTableData}/>
        </>
    )
}

export default Product_category
