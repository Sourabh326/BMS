import React from 'react'

const Purchase_info = ()=> {
    return (
        <div className="main-footer">
            <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Purchase Info</h3>
            </div>
            
            <div className="card-body">
              <table id="example1" className="table  table-striped bg-white">
                <thead className="">
                    <tr>
                      <th style={{width:'150px'}}>Vendor Id</th>
                      <th>Purchase date</th>
                      <th>Purchase Time</th>
                      <th>Vendor Bill No</th>
                      <th>Gst Percent</th>
                      <th>Gst Amount</th>
                      <th>Gross Amount</th>
                      <th>Net Amount</th>
                      
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>123</td>
                      <td>12-12-2020</td>
                      <td>12:20pm</td>
                      <td>Gst Percent</td>
                      <td>Gst Amount</td>
                      <td>23232</td>
                      <td>323</td>
                      <td>324</td>
                </tr>
                </tbody>
               
              </table>
            </div>
           
          </div>
        </div>
    )
}

export default Purchase_info;
