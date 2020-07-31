import React from 'react';

const VendorEntry = () => {
   return(
       <>
       <div className="main-footer">
        <div className="container-fluid">
        <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Vendor Entry</h3>
              </div>
              
              <form className="form-horizontal">
                <div className="card-body">
                  <div className="form-group row">
                    <label for="first_name" className="col-sm-2 col-form-label">Frist Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="first_name" name="first_name" placeholder="Name Frist Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="last_name" className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Enter Last name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="mobile" className="col-sm-2 col-form-label">Mobile Number</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Enter Mobile Number" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                        <label className="form-check-label" for="exampleCheck2">Remember me</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info">Add Vendor</button>
                  <button type="submit" className="btn btn-default float-right">Cancel</button>
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
                <table className="table ">
                  <thead>                  
                    <tr>
                      <th style={{width:' 10px'}}>Id</th>
                      <th>Name</th>
                      <th>Mobile No.</th>
                      <th>Payment id</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Update software</td>
                      <td>1234567800</td>
                      <td><span className="badge bg-danger">55%</span></td>
                      <td><i class="fa-2x fas fa-edit"></i>
                      <i class="fa-2x fas fa-pen"></i>
                      </td>
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