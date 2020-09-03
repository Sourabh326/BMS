import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

const Raw_material_product = ({ formData, setFormData, tableData }) => {
  // console.log(formData, tableData);
  let onChange = (e) => {
    let { name, value, type, checked } = e.currentTarget;
    if (type === "checkbox") {
      setFormData((state) => ({
        ...state,
        [name]: checked,
      }));
      return;
    }
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
                        <th>Used Quantity Per Unit Material (kg)</th>
                        <th>Used Material Per Unit Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((data, i) => (
                        <tr key={i}>
                          <td>
                            <input
                              name={`product_id-${i}-${data.product_id}`}
                              type="checkbox"
                              id="checkbox"
                              style={{ width: "50px", height: "20px" }}
                              onChange={onChange}
                              value={formData[`product_id-${i}-${data.product_id}`]}
                            />
                          </td>
                          <td className="tabledit-view-mode">
                            <span className="tabledit-span">
                              {data.product_name}
                            </span>
                          </td>
                          <td>
                            <input
                              type="Number"
                              className="form-control raw_material_per_unit_qty"
                              name="raw_material_per_unit_qty"
                              name={`raw_material_per_unit_qty-${i}`}
                              onChange={onChange}
                              value={formData[`raw_material_per_unit_qty-${i}`]}
                              placeholder="0.00"
                            />
                          </td>

                          <td>
                            <input
                              type="Number"
                              className="form-control used_material_per_unit_rate"
                              name={`raw_material_per_unit_rate-${i}`}
                              placeholder="0.00"
                              value={
                                formData[`raw_material_per_unit_rate-${i}`]
                              }
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                      ))}
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
