import React from 'react'
import Navbar from '../../Navbar/Navbar'

function Ready_material_stock() {
    return (
      <>
      <Navbar />
        <div className="main-footer">
            <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Ready Material Stock</h3>
            </div>
            
            <div className="card-body">
              <table id="example1" className="table table-bordered table-striped bg-white">
                <thead >
                    <tr>
                      <th style={{width:'200px'}}>Product Category id</th>
                      <th>Product Name</th>
                      <th>Qty</th>
                       <th>Per Qty Selling  Cost</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                     <td>1234</td>
                      <td>Cement</td>
                      <td>kg</td>
                      <td>39</td>
                </tr>
                </tbody>
               
              </table>
            </div>
           
          </div>
        </div>
        </>
    )
}

export default Ready_material_stock;
