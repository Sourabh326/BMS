import React from 'react'
import Navbar from '../../Navbar/Navbar'
const Raw_material_stock =()=> {
    return (
      <>
       <Navbar />
        <div className="main-footer">
            <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Raw Material Stock</h3>
            </div>
            
            <div className="card-body">
              <table  className="table table-responsive-lg  table-striped bg-white">
                <thead>
                    <tr>
                      <th>Product Id</th>
                      <th>Product Name</th>
                      <th>Unit</th>
                      <th>Qty</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                     <td>1234</td>
                      <td>Cement</td>
                      <td>kg</td>
                      <td>39</td>
                      <td><i class="fas fa-edit btn btn-success btn-sm" > Edit</i>
                      <button className="btn btn-danger btn-sm ml-3"><i class="fas fa-trash"></i> Delete</button></td>

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
