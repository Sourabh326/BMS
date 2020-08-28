import React from 'react'
import { useState } from 'react';


const Raw_material_product = () => {

  

// Insert in database tablename- manufacturing_raw_qty_info
  return (
    <>
      <div class="container mt-100">
        <div class="row">
          <div class="col-md-12">
            <div class="card bg-light">
              <div class="card-header">
              <h4>Raw Material Cost </h4>    
              </div>
              <div class="card-block">
                <div class="table-responsive">
                
                  <table
                    class="table display bg-light table-hover table-bordered"
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
                        <td class="tabledit-view-mode">
                      <span class="tabledit-span">Electricity</span>
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
