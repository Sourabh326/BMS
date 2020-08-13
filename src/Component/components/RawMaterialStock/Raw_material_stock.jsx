import React from 'react'

const Raw_material_stock =()=> {
    return (
      <>
      
        <div className="main-footer">
            <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Raw Material Stock</h3>
            </div>
            
            <div className="card-body">
              <table  className="table table-responsive-lg  table-striped bg-white">
                <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Unit</th>
                      <th>Qty</th>
                      <th>Rate</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                      <td>Cement</td>
                      <td>kg</td>
                      <td>39</td>
                      <td>0.30</td>
                      <td><i class="fas fa-edit btn btn-success btn-xs" data-toggle="modal" data-target="#RawMaterialleModal"> Edit</i>
                      <button className="btn btn-danger btn-xs ml-3"><i class="fas fa-trash"></i> Delete</button></td>

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
