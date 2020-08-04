import React from 'react'

const Raw_material_stock_report =()=> {
    return (
        <div className="main-footer">
             <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Raw Material Stock Report</h3>
            </div>
            
            <div className="card-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead className="thead-dark">
                <tr>
                      <th style={{width:' 10px'}}>Product ID</th>
                      <th>Product name</th>
                      <th>Product Category</th>
                      <th>Quantity</th>
                      <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                     <td>Person Name</td>
                      <td>Company Name</td>
                      <td>City</td>
                      <td>Address</td>
                      <td>Email Id</td>
                </tr>

                </tbody>
               
              </table>
            </div>
           
          </div>
        </div>
    )
}

export default Raw_material_stock_report;
