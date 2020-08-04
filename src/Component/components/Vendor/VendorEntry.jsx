import React, { useEffect } from 'react';
import $ from 'jquery';

const VendorEntry = () => {



useEffect(()=>{
  $('#add-vendor').hide();
  $("#addVendorBtn").click(()=>{
    $('#add-vendor').show("slow");
  })
  $(".cancle").click((e)=>{
    e.preventDefault();
    $('#add-vendor').hide("slow");
  })

  
})

   return(
       <>
       <div className="main-footer">
        <div className="container-fluid" >
          <button className="btn btn-info btn-lg mb-5" id="addVendorBtn">Add New</button>
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Vendor Entry</h3>
              </div>
              
              <form className="form-horizontal" >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                    <div className="form-group row">
                    <label for="person_name" className=" col-sm-10 col-form-label">Person Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="person_name" placeholder="Person Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="company_name" className=" col-sm-10  col-form-label">Company Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="company_name" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="city" className=" col-sm-10  col-form-label">City</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="city" placeholder="City Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="address" className=" col-sm-10  col-form-label">Address</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="address" placeholder="Address" />
                    </div>
                  </div>
                  
                    </div>
                    <div className="col-md-6">
                  <div className="form-group row">
                    <label for="email_id" className=" col-sm-10  col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="email_id" placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="contact_one" className=" col-sm-10  col-form-label">Contact Number</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" name="contact_one" placeholder="Contact Number" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="contact_two" className=" col-sm-10  col-form-label">Alternate Contact Number</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" name="contact_two" placeholder="Alternet Contact Number" />
                    </div>
                  </div>
                    </div>
                  </div>
                 
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add Vendor</button>
                  <button type="submit" className="btn btn-default float-right cancle">Cancel</button>
                </div>
               
              </form>
            </div>
        </div>

{/* Vendor Table */}
<div className="container-fluid">
<div className="row">
<div className="col-md-12">
            <div className="card">
              <div className="card-header bg-info">
                <h3 className="card-title">Vendor Table</h3>
              </div>
              
              <div className="card-body">
                <table className="table table-striped" id="vendorTable">
                  <thead className="thead-dark">                  
                    <tr>
                      <th style={{width:' 10px'}}>Vendor ID</th>
                      <th>Person Name</th>
                      <th>Company Name</th>
                      <th>City</th>
                      <th>Address</th>
                      <th>Email Id</th>
                      <th>Contact</th>
                      <th>Contact</th>
                      <th>Balance</th>
                      <th colSpan="2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{width:' 10px'}}>123</td>
                      <td>Person Name</td>
                      <td>Company Name</td>
                      <td>City</td>
                      <td>Address</td>
                      <td>Email Id</td>
                      <td>Contact</td>
                      <td>Contact</td>
                      <td>Balance</td>
                      <td><i class="fas fa-edit btn btn-success btn-sm"> Edit</i></td>
                      <td><button className="btn btn-danger btn-sm"><i class="fas fa-trash"></i> Delete</button></td>

                    </tr>
                   
                  </tbody>
                    
                    
                   
                 
                </table>
              </div>
           
              <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                </ul>
              </div>
            </div>
         
          </div>
  </div>
  </div>

 </div>
         </>

   )
}



export default VendorEntry;