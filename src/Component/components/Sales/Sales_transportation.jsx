import axios from "axios";
// Insert Data Into Purchase_transportation_info Table In Databse
import Transport_info_table from "./Transport_info_table";
import React, { useState } from "react";

const Sales_transportation = () => {
  const [formData, setFormData] = useState({});

  // onChnage
  const onChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
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
      <div className="ml-3">
        <h5>Sales Transportation</h5>
      </div>
      <form className="form-horizontal">
        <div className="card-body">
          <div className="row">
            {/* 1st Row */}

            <div className="col-md-4">
              <div className="form-group row">
                <label
                  htmlFor="production_qty"
                  className=" col-sm-10  col-form-label"
                >
                  Receipt No.
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className=""
                    name="receipt_no"
                    placeholder="Receipt No."
                    onChange={onChange}
                    value=""
                  />
                </div>
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
                    className=""
                    name="driver_name"
                    placeholder="Driver Name"
                    onChange={onChange}
                    value=""
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
                    className="vehicle_name"
                    name="vehicle_name"
                    placeholder="Vehicle Name"
                    onChange={onChange}
                    value=""
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
                    className=""
                    name="driver_contact_no"
                    placeholder="Driver Mobile Number"
                    onChange={onChange}
                    value=""
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
                    className=""
                    name="vehicle_no"
                    placeholder="Vehicle No."
                    onChange={onChange}
                    value=""
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
                    className=""
                    placeholder="Ex: 2"
                    name="no_of_trip_a_day"
                    onChange={onChange}
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-3">
          <div className="col-md-4">
            <button
              type="submit"
              style={button}
              className="btn btn-block shadow"
            >
              Add in List
            </button>
          </div>
        </div>

        {/* Purchase Transportation table */}
        <div className="mt-5">
          <Transport_info_table />
        </div>
      </form>
    </>
  );
};

export default Sales_transportation;
