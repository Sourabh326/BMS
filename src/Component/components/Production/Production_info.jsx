import React from 'react'


const Production_info =()=> {
    return (
        <>
       
        <div className="main-footer">
            <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Production Info</h3>
            </div>
            
            <div className="card-body">
              <table id="example1" className="table table-striped bg-white">
                <thead className="">
                    <tr>
                      <th style={{width:'150px'}}>Production Date</th>
                      <th>Production Qty</th>
                      <th>Total Production Cost</th>
                      <th>Date</th>
                       </tr>
                </thead>
                <tbody>
                <tr>
                      <td>123</td>
                      <td>12-12-2020</td>
                      <td>12:20pm</td>
                      <td>Gst Percent</td>
                </tr>
               
                </tbody>
               
              </table>
            </div>
           
          </div>
        </div>
        </>
    )
}

export default Production_info
