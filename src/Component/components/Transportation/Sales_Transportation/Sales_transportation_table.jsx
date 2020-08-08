import React from 'react'

function Sales_transportation_table() {
    return (
        <>
         
        <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Sales Transportation Details</h3>
            </div>
            
            <div className="card-body">
              <table className="table table-responsive-xl  table-striped bg-white">
                <thead >
                    <tr>
                      <th>Receipt No.</th>
                      <th>Transportation Category</th>
                      <th>vehicle Name</th>
                      <th>vehicle No.</th>
                      <th>Driver Name</th>
                      <th>Driver Contact</th>
                      <th>Day Trip</th>
                      <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                      <td>Raw Material Name</td>
                      <td>Transportation Category</td>
                      <td>vehicle Name</td>
                      <td>vehicle No.</td>
                      <td>Driver Name</td>
                      <td>Driver Contact</td>
                      <td>Day Trip</td>
                      <td><i class="fas fa-edit btn btn-success btn-xs" data-toggle="modal" data-target="#PurchaseTransportationModal"> Edit</i></td>
                      <td><button className="btn btn-danger btn-xs"><i class="fas fa-trash"></i> Delete</button></td>

                </tr>

                </tbody>
               
              </table>
            </div>
           
          </div>
      
        </>
    )
}

export default Sales_transportation_table;