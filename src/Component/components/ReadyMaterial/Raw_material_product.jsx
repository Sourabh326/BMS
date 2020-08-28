import React from 'react'
import { useState } from 'react';


const Raw_material_product = () => {
  const [tableData, setTableData] = React.useState([]);
  const [formData, setFormData] = React.useState({});

                      
  let onChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };
  

  // Insert in database tablename- manufacturing_raw_qty_info
  return (
    <>
      <div className="container mt-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card bg-light">
              <div className="card-header">
                <h4>Raw Material Cost </h4>
              </div>
              <div className="card-block">
                <div className="table-responsive">
                
                  <table
                    className="table display bg-light table-hover table-bordered"
                    id="table_id"
                  >
                    <thead>
                      <tr>
                        <th>Select</th>
                        <th>Raw Material</th>
                        <th>Used Quantity (kg)</th>
                        <th>Used Material Per Unit Rate</th>
                      </tr>
                    </thead>
                    <tbody> 
                      
                        <tr>
                        <td><input type="checkbox" id="checkbox" style={{width:'50px',height:'20px'}} /></td>
                        <td className="tabledit-view-mode">
                      <span className="tabledit-span">Electricity</span>
                        </td>
                        <td>
                          <input
                            type="Number"
                            className="form-control used_quantity"
                            name=""
                            placeholder="0.00"
                            />
                        </td>
                        
                        <td>
                          <input
                            type="Number"
                            className="form-control used_material_per_unit_rate"
                            name=""
                            placeholder="0.00"
                             />
                        </td>
                        
                      </tr>
                         
                    </tbody>
                  
                  </table>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Raw_material_product;
