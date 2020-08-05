import React from 'react'
import Navbar from '../../Navbar/Navbar'
const Purchase_product_info=()=> {
    return (
      <>
      <Navbar />
        <div className="main-footer">
            <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Purchase Product Info</h3>
            </div>
            
            <div className="card-body">
              <table id="example1" className="table table-bordered table-striped bg-white">
                <thead className="">
                    <tr>
                      <th style={{width:'150px'}}>Purchase Id</th>
                      <th>Raw Material id</th>
                      <th>Unit</th>
                      <th>Qty</th>
                     </tr>
                </thead>
                <tbody>
                <tr>
                      <td>123</td>
                      <td>12-12-2020</td>
                      <td>12 kg</td>
                      <td>13</td>
                </tr>
                </tbody>
               
              </table>
            </div>
           
          </div>
        </div>
        </>
    )
}

export default Purchase_product_info;
