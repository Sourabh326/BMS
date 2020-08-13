import React from 'react'

const Raw_material_table = () => {
    return (
        <>
          <div className="card bg-info">
          <div className="card-header">
            <h3 className="card-title">Ready Material Stock</h3>
          </div>

          <div className="card-body">
            <table
              id="example1"
              className="table table-responsive-lg table-striped bg-white"
            >
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Unit</th>
                  <th>Qty</th>
                  <th>Rate</th>
                 </tr>
              </thead>

              <tbody>
               
                  <tr>
                    <td>abc</td>
                    <td>Cement</td>
                    <td>2 Unit</td>
                    <td>22 pcs</td>
                   </tr>
              
              </tbody>
            </table>
          </div>
        </div>
        </>
    )
}

export default Raw_material_table;
