import React from 'react'
import Navbar from '../../Navbar/Navbar'
import SubCat_edit_modal from './SubCat_edit_modal'

const Product_sub_category =()=> {
    return (
        <>
        <Navbar />
        <div className="main-footer">
        <div className="container-fluid">
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Add Product Sub Category</h3>
              </div>
              
              <form className="form-horizontal" >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">

                    <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
	                    <label for="default-outline-select" className=" col-sm-10 col-form-label">Product Category</label>
	                    <select id="default-outline-select" name="product_category" class="form-control col-sm-10">
	                  	 <option disabled>Select</option>
	                  	 <option value="">1</option>
                       <option value="1" >2</option>
                    	</select>
                      </div>  

                    <div className="form-group row">
                    <label for="product_name" className=" col-sm-10 col-form-label">Sub Category Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="product_name" placeholder="Sub Category Name" />
                    </div>
                    </div>

                  </div>  
                  </div>
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add Sub Category</button>
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
                <tr>
                     <td>1</td>
                     <td>Brick</td>
                     <td><i class="fas fa-edit btn btn-success btn-xs" data-toggle="modal" data-target="#SubCategoryModal"> Edit</i>
                      <button className="btn btn-danger btn-xs ml-3"><i class="fas fa-trash"></i> Delete</button></td>
                </tr>
                </tbody>
               
              </table>
            </div>
           
          </div>
        </div>

        {/* Sub Category Edit Modal*/}
        <SubCat_edit_modal />
        </>
    )
}

export default Product_sub_category
