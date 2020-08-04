import React from 'react';

const VendorReport = () => {
    return(
        <>
        <div className="main-footer">
        <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Vendor Report</h3>
            </div>
            
            <div className="card-body">
              <table id="example1" className="table table-bordered table-striped">
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
                    </tr>
                </thead>
                <tbody>
                <tr>
                     <td>Person Name</td>
                      <td>Company Name</td>
                      <td>City</td>
                      <td>Address</td>
                      <td>Email Id</td>
                      <td>Contact</td>
                      <td>Contact</td>
                      <td>Balance</td>
                      <td>Balance</td>
                </tr>

                </tbody>
               
              </table>
            </div>
           
          </div>
        </div>
        </>
    )
}
export default VendorReport;