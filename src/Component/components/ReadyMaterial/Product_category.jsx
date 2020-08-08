import React from 'react'
import Navbar from '../../Navbar/Navbar'

const Product_category =()=> {
    return (
        <>
        <Navbar />
        <div className="main-footer">
        <div className="container-fluid">
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Add Product Category</h3>
              </div>
              
              <form className="form-horizontal" >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">

                    <div className="form-group row">
                    <label for="category_name" className=" col-sm-10 col-form-label">Category Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="category_name" placeholder="Category Name" />
                    </div>
                    </div>

                  </div>  
                  </div>
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add Category</button>
                  <button type="submit" className="btn btn-default ml-4 cancle">Cancel</button>
                </div>
               
              </form>
            </div>
        </div>       
       

        {/* Add Sub Category */}
        <div className="container-fluid">
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Add Sub Category</h3>
              </div>
              
              <form className="form-horizontal" >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">

                    <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
	                    <label for="default-outline-select" className=" col-sm-10 col-form-label">Choose Sub Category</label>
	                    <select id="default-outline-select" class="form-control col-sm-10">
	                  	 <option disabled>Select</option>
	                  	 <option value="">1</option>
                       <option value="1" >2</option>
                    	</select>
                      </div>

                  </div>  
                  </div>
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add</button>
                  <button type="submit" className="btn btn-default ml-4 cancle">Cancel</button>
                </div>
               
              </form>
            </div>
        </div>  
        </div>
        </>
    )
}

export default Product_category
