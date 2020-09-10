// Insert Data Into Purchase_transportation_info Table In Databse

import React from "react";
import Transport_info_table from "./Transport_info_table";

const Purchase_transportation = () => {
  let formHeader = {
    backgroundColor: "#0f4c75",
  };
  let button = {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "sans-serif",
    backgroundColor: "#e11d74",
    border: "none",
    boxShadow: "10px 5px -3px (#ccc)",
    
  };  

  return (
    <>
      <div className="card card-info">
        <div className="card-header" style={formHeader}>
          <h3 className="card-title">Transport Entry </h3>
        </div>

        <form className="form-horizontal">
          <div className="card-body">
            <div className="row">
              {/* 1st Row */}

              <div className="col-md-4">
                <div className="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                  <label
                    htmlFor="default-outline-select"
                    className=" col-sm-10 col-form-label"
                  >
                    Raw material
                  </label>
                  <select
                    id="default-outline-select"
                    name="raw_material_id"
                    className="form-control col-sm-10"
                  >
                    <option value="none">Select</option>
                    ))
                  </select>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="production_qty"
                    className=" col-sm-10  col-form-label"
                  >
                    Driver Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="driver_name"
                      placeholder="Driver Name"
                    />
                  </div>
                </div>
              </div>

              {/* 2nd Row */}

              <div className="col-md-4">
                <div className="form-group row">
                  <label
                    htmlFor="production_qty"
                    className=" col-sm-10  col-form-label"
                  >
                    Vehicle Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="vehicle_name"
                      placeholder="Vehicle Name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="total_production_cost"
                    className=" col-sm-10  col-form-label"
                  >
                    Driver Contact
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="driver_contact_no"
                      placeholder="Driver Mobile Number"
                    />
                  </div>
                </div>
              </div>

              {/* 3rd Row */}

              <div className="col-md-4">
                <div className="form-group row">
                  <label
                    htmlFor="production_qty"
                    className=" col-sm-10  col-form-label"
                  >
                    Vehicle No.
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="vehicle_no"
                      placeholder="Vehicle No."
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="total_production_cost"
                    className=" col-sm-10  col-form-label"
                  >
                    No. of Trip / Day
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex: 2"
                      name="no_of_trip_a_day"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tansport Info Table */}
          <Transport_info_table />

          <div className="card-footer bg-white">
            <button type="submit" style={button} className="btn btn-info">
              Add in List
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Purchase_transportation;
