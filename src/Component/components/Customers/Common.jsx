import React, { useEffect } from 'react';
import $ from 'jquery';

const CustomerForm =()=> {

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
    return (
        <>
         <div className="container-fluid" >
          <button className="btn btn-info  mb-5" id="addVendorBtn">Add New</button>
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Customer Entry</h3>
              </div>
              
              <form className="form-horizontal" >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                    <div className="form-group row">
                    <label for="customer_name" className=" col-sm-10 col-form-label">Customer Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="customer_name" placeholder="Customer Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="mobile_no" className=" col-sm-10  col-form-label">Mobile Number</label>
                    <div className="col-sm-10">
                      <input type="Number" className="form-control"  name="mobile_no" placeholder="Mobile Number" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="address" className=" col-sm-10  col-form-label">Address</label>
                    <div className="col-sm-10">
                      <textarea type="text" className="form-control"  name="address" placeholder="Address" ></textarea>
                    </div>
                  </div>
                  
                    </div>
                   
                  </div>
                 
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add Customer</button>
                  <button type="submit" className="btn btn-default float-right cancle">Cancel</button>
                </div>
               
              </form>
            </div>
        </div>    
           
        </>
    )
}

const CustomerTable = ()=>{
    return(
        <>
          <div className="container-fluid">
<div className="row">
<div className="col-md-12">
            <div className="card bg-info">
              <div className="card-header ">
                <h3 className="card-title">Customer Details</h3>
              </div>
              
              <div className="card-body">
                <table className="table table-striped table-responsive-lg bg-white" id="vendorTable">
                  <thead>                  
                    <tr>
                      <th>Customer Name</th>
                      <th>Address</th>
                      <th>Mobile</th>
                      <th>Balance</th>
                      <th colSpan="2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>123</td>
                      <td>Person Name</td>
                      <td>Company Name</td>
                      <td>City</td>
                      <td><i class="fas fa-edit btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModal"> Edit</i>
                      <button className="btn btn-danger btn-sm ml-2"><i class="fas fa-trash"></i> Delete</button></td>
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
        </>
    )
}

export { CustomerTable};
export default CustomerForm;
