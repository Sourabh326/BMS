import React, { useEffect } from 'react';

import $ from 'jquery';
import AddCategoryModel from './AddCategoryModel';

const ExpenseForm =()=> {

  useEffect(()=>{
    $('#add-vendor').hide();
    $("#addVendorBtn").click(()=>{
      $('#add-vendor').slideToggle();
    })
 
  })    
    return (
        <>
         <div className="container-fluid" >
          <button className="btn btn-danger mb-5" id="addVendorBtn">Add New</button>
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Expense Entry</h3>
              </div>
              <form className="form-horizontal" onSubmit={(e)=>e.preventDefault()}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">

                    <div className="form-group row">
                    <div className="col-sm-10">
                     <button className="btn btn-secondary" data-toggle="modal" data-target="#categoryModal">Add Expense Category</button>
                    </div>
                    </div>
                    <AddCategoryModel />

                      <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
	                    <label for="default-outline-select" className=" col-sm-10 col-form-label">Choose Category</label>
	                    <select id="default-outline-select" class="form-control col-sm-10">
	                  	 <option disabled>Select</option>
	                  	 <option value="">1</option>
                       <option value="1" >Add New</option>
                    	</select>
                      </div>

                    <div className="form-group row">
                    <label for="receipt_no" className=" col-sm-10 col-form-label">Receipt Number</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="receipt_no" placeholder="Receipt Number" />
                    </div>
                    </div>

                  <div className="form-group row">
                    <label for="person_name" className=" col-sm-10  col-form-label">Person Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="person_name" placeholder="Person Name" />
                    </div>
                  </div>
                  </div>

                  <div className="row-md-6">
                  <div className="form-group row">
                    <label for="amount" className=" col-sm-10  col-form-label">Amount</label>
                    <div className="col-sm-12">
                      <input type="Number" className="form-control"  name="amount" placeholder="Amount" />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label for="description" className=" col-sm-10  col-form-label">Description</label>
                    <div className="col-sm-12">
                      <textarea type="text" className="form-control"  name="description" placeholder="Description" ></textarea>
                    </div>
                  </div>
                  
                    </div>
                  </div>
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add Expense</button>
                  <button type="submit" className="btn btn-default float-right cancle">Cancel</button>
                </div>
               
              </form>
            </div>
        </div>    
           
        </>
    )
}

const ExpenseTable = ()=>{
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
                      <th>Category</th>
                      <th>Receipt No.</th>
                      <th>Person Name</th>
                      <th>Amount</th>
                      <th>Description</th>
                      <th>Transuction Date</th>
                      <th>Transuction Time</th>
                      <th colSpan="2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Abc</td>
                      <td>123</td>
                      <td>Sourabh</td>
                      <td>2333</td>
                      <td>udjasd udasdji</td>
                      <td>12-02-2020</td>
                      <td>12:2 pm</td>
                      <td><i class="fas fa-edit btn btn-success btn-xs" data-toggle="modal" data-target="#exampleModal"> Edit</i>
                      <button className="btn btn-danger btn-xs ml-2"><i class="fas fa-trash"></i> Delete</button></td>
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

export { ExpenseTable};
export default ExpenseForm;
