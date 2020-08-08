import React,{useEffect} from 'react'
import Navbar from '../../Navbar/Navbar'

import $ from 'jquery';

function Ready_material_stock() {
  useEffect(()=>{
    $('#add-vendor').hide();
    $("#addVendorBtn").click(()=>{
      $('#add-vendor').slideToggle();
    })
 
  })

    return (
      <>
      <Navbar />
        <div className="main-footer">
          {/* Material Form */}
          
        <div className="container-fluid">
        <button className="btn btn-danger  mb-5" id="addVendorBtn">Add New</button>
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Add Ready Material</h3>
              </div>
              
              <form className="form-horizontal" >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">

                    <div className="form-group row">
                    <label for="product_name" className=" col-sm-10 col-form-label">Product Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="product_name" placeholder="Category Name" />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="unit" className=" col-sm-10 col-form-label">Unit</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="unit" placeholder="Unit" />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="qty" className=" col-sm-10 col-form-label">Qty</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="qty" placeholder="Unit" />
                    </div>
                    </div>

                  </div>  
                  <div className="col-md-6">
                  <div className="form-group row">
                    <label for="standard_size" className=" col-sm-10 col-form-label">Standard Size</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="standard_size" placeholder="Standard Size" />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="standard_weight" className=" col-sm-10 col-form-label">Weight Per Unit</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="standard_weight" placeholder="Standard Size" />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="total_weight" className=" col-sm-10 col-form-label">Total Weight</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="total_weight" placeholder="Total Weight" />
                    </div>
                    </div>
                  </div>
                  </div>
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add Stock</button>
                  <button type="submit" className="btn btn-default ml-4 cancle">Cancel</button>
                </div>
               
              </form>
            </div>
        </div>       
       

          {/* Material Table */}
            <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Ready Material Stock</h3>
            </div>
            
            <div className="card-body">
              <table id="example1" className="table table-responsive-lg table-striped bg-white">
                <thead >
                    <tr>
                      <th style={{width:'200px'}}>Product Category</th>
                      <th>Product Name</th>
                      <th>Unit</th>
                      <th>Qty</th>
                      <th>Standart Size</th>
                      <th>Weight Per Unit</th>
                     <th>Total Weight</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                     <td>abc</td>
                      <td>Cement</td>
                      <td>2 Unit</td>
                      <td>22 pcs</td>
                      <td>336</td>
                      <td>22</td>
                      <td>1234</td>
                </tr>
                </tbody>
               
              </table>
            </div>
           
          </div>
        </div>
        
        </>
    )
}

export default Ready_material_stock;
