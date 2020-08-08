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
                      <th>Sub Category</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                     <td>1</td>
                     <td>Brick</td>
                     <td className="d-inline-block font-weight-bold text-success">Map Here <i class="fas fa-plus    "></i></td>
                </tr>
                </tbody>
               
              </table>
            </div>
           
          </div>
        </div>
        </>
    )
}

export default Product_category
