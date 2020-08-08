import React, { useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import EditModel from './EditModel'
import $ from 'jquery';
import Category_modal from './Category_modal';


function Employee() {

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
        <div className="container-fluid" >
          <button className="btn btn-danger  mb-5" id="addVendorBtn">Add Employee</button>
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Employee Entry</h3>
              </div>
              
              <form className="form-horizontal" >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                    <div className="form-group row">
                    <div className="col-sm-10">
                     <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#categoryModal">Add Employee Category</button>
                    </div>
                    <Category_modal />
                    </div>

                    <div className="form-group row">
                    <label for="cat_id" className=" col-sm-10 col-form-label">Category Id</label>
                    <div className="col-sm-10">
                     <select name="category_name" style={{width:'100%',height:'40px',border:'1px solid #dae1e7',padding:'10px',borderRadius:'4px',color:'grey',background:'white'}}>
                       <option disabled>Choose Category</option>
                       <option value="">abc</option>
                     </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="employee_name" className=" col-sm-10  col-form-label">Employee Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="employee_name" placeholder="Company name" />
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
                  <div className="form-group row">
                    <label for="basic_salary" className=" col-sm-10  col-form-label">Basic Salary</label>
                    <div className="col-sm-10">
                      <input type="Number" className="form-control" name="basic_salary" placeholder="Basic Salary" />
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add Employee</button>
                  <button type="submit" className="btn btn-default float-right cancle">Cancel</button>
                </div>
              </form>
            </div>
        </div>
        
{/* Vendor Table */}
<div className="container-fluid">
<div className="row">
<div className="col-md-12">
            <div className="card bg-info">
              <div className="card-header ">
                <h3 className="card-title">Employee Details</h3>
              </div>
              
              <div className="card-body">
                <table className="table table-striped table-responsive-lg bg-white" id="vendorTable">
                  <thead >                  
                    <tr>
                      <th>Cat Id</th>
                      <th>Employee Name</th>
                      <th>City</th>
                      <th>Address</th>
                      <th>Contact Number</th>
                      <th>Alternate Number</th>
                      <th>Basic Salary</th>
                      <th colSpan="2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>123</td>
                      <td>Person Name</td>
                      <td>Company Name</td>
                      <td>City</td>
                      <td>Address</td>
                      <td>Email Id</td>
                      <td>Contact</td>
                      <td><i class="fas fa-edit btn btn-success btn-xs" data-toggle="modal" data-target="#exampleModal"> Edit</i></td>
                      <td><button className="btn btn-danger btn-xs"><i class="fas fa-trash"></i> Delete</button></td>

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


{/* Edit Model */}
<EditModel /> 

  </>
    )
}

export default Employee;
