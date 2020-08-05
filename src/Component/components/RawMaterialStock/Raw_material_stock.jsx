import React from 'react'
import Navbar from '../../Navbar/Navbar'
const Raw_material_stock =()=> {
    return (
      <>
       <Navbar />
        <div className="main-footer">
            <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Vendor Report</h3>
            </div>
            
            <div className="card-body">
              <table  className="table  table-striped bg-white">
                <thead>
                    <tr>
                      <th>Product Id</th>
                      <th>Product Name</th>
                      <th>Unit</th>
                       <th>Qty</th>
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

export default Raw_material_stock;
