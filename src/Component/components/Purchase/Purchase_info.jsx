import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Purchase_Billing_table from "./Purchase_Billing_table";
import DateFnsUtils from "@date-io/date-fns";
import Purchase_info_table from "./Purchase_info_table";
import Purchase_transportation from "./Purchase_transportation";


// purchase product info form
import Purchase_product_info from "./purchase_product_info/Purchase_product_info";
import Add_vendor_modal from "./Add_vendor_modal";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import axios from "axios";


const Purchase_info = () => {
  // for date
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  // For purchass
  const [formData, setFormData] = React.useState({});

  // onChnage
  const onChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  // get vendor only
  const [vendor, setVendor] = useState([]);
  useEffect(() => {
    axios
      .get("/vendors")
      .then((res) => {
        setVendor(res.data.vendors);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/purchases", { purchases: formData })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //for Form Design
  
  let button = {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "sans-serif",
    backgroundColor: "#e11d74",
    border: "none",
    boxShadow: "10px 5px -3px (#ccc)",
  };
  let formHeader = {
    backgroundColor: "#0f4c75",
  };
  
  return (
    <>
      <Navbar />
      <div className="main-footer">
        <div className="card card-info">
          <div className="card-header" style={formHeader}>
            <h3 className="card-title">Purchase Info</h3>
          </div>

          {/*  Purchase product info From */}
          {/* Insert data into Purchase_product_info Component table */}
          <div className="card-body" >
            <h5>Purchase Product Info</h5>
            <Purchase_product_info />
          </div>

          {/* Insert Data Into Parchase_info Table in Databse */}
          <form className="form-horizontal"   onSubmit={handleSubmit}>
            <div className="card-body">
              {/* 1st Row Vendor (Personal Info) */}
              {/* Insert data in Purchase_info table */}
              <h5>Personal Info</h5>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                    <label
                      htmlFor="default-outline-select"
                      className=" col-sm-10 col-form-label"
                    >
                      Vendor
                    </label>
                    <select
                      id="default-outline-select"
                      name="vendor_id"
                      onChange={onChange}
                      className=" col-md-10 col-sm-4 "
                    >
                      <option disabled>Select</option>
                      {vendor.map((res, index) => (
                        <option key={index} value={res.vendor_id}>
                          {" "}
                          {res.person_name}{" "}
                        </option>
                      ))}
                    </select>
                    <div class="input-group-append">
                      <h6 className="ml-2 mt-2">Or</h6>
                      <button
                        data-toggle="modal"
                        data-target="#CategoryModal"
                        style={{ background: "#b7efcd", color: "black" }}
                        className="btn btn-xs ml-2 rounded-pill shadow"
                        type="button"
                      >
                        Add New Vendor
                      </button>
                      <Add_vendor_modal />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                    <label
                      htmlFor="default-outline-select"
                      className=" col-sm-10 col-form-label"
                    >
                      Transportation Type
                    </label>
                    <select
                      id="default-outline-select"
                      name="transporting_type"
                      onChange={onChange}
                      className=" col-md-10 col-sm-4 "
                    >
                      <option disabled value="none">
                        Select
                      </option>
                      <option value="self">Self</option>
                      <option value="company">By Company</option>
                      <option value="third party vehicle">
                        Third Party vehicle
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-10  col-form-label"
                    >
                      Purchase date
                    </label>
                    <div className="col-sm-10">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          margin="normal"
                          name="purchase_date"
                          id="date-picker-dialog"
                          label="Date picker dialog"
                          format="MM/dd/yyyy"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                      </MuiPickersUtilsProvider>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-10  col-form-label"
                    >
                      Purchase Time
                    </label>
                    <div className="col-sm-10">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-picker"
                          name="purchase_time"
                          label="Time picker"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change time",
                          }}
                        />
                      </MuiPickersUtilsProvider>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3rd Row*/}
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-12  col-form-label"
                    >
                      Total Gross Amount
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className=""
                        name="total_gross_amount"
                        placeholder="Ex: 345"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group row">
                    <label
                      htmlFor="other_charges"
                      className=" col-sm-10  col-form-label"
                    >
                      Other Charges
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className=""
                        name="other_charges"
                        placeholder="Ex: 876"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-10  col-form-label"
                    >
                      Total GST Amount
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className=""
                        name="total_gst_amount"
                        placeholder="GST Amount"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-md-3">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-10  col-form-label"
                    >
                      Total Discount
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className=""
                        name="total_discount"
                        placeholder="Ex: 56"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 4th Row */}
              {/* Insert data into Purchase_info */}
              <div className="row p-2">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group row">
                      <label
                        htmlFor="production_qty"
                        className=" col-sm-10  col-form-label"
                      >
                        Total Net Amount
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className=""
                          name="total_net_amount"
                          placeholder="Ex: 12333 /-"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label
                        htmlFor="production_qty"
                        className=" col-sm-12  col-form-label"
                      >
                        Total Transport and Handling Charges
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className=""
                          name="total_transport_and_handling_charges"
                          placeholder="Ex: 334"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group row">
                      <label
                        htmlFor="production_qty"
                        className=" col-sm-10  col-form-label"
                      >
                        Vendor Bill No
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className=""
                          name="	vendor_bill_no"
                          placeholder="Ex: 12333 /-"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Submit Button */}
              <div className="row">
                <div className="col-md-4">
                  <button
                    type="submit"
                    style={button}
                    className="btn btn-block shadow purchse_info_submit"
                  >
                    Add in List
                  </button>
                </div>
              </div>{" "}
                {/* Purchase Info Table */}
                <div className="my-2">
                <Purchase_info_table />
                </div>
              <hr style={{ border: "1px solid #e0ece4", width: "100%" }} />

             

              {/* Transportation form */}
              <Purchase_transportation />

              
            </div>
             {/* Final Submit Button */}
        <button
          style={{
            backgroundColor: "#00bcd4",
            color: "#fff",
            fontFamily: "sans-serif",
            fontSize: "20px",
          }}
          type="submit"
          className="btn btn-block shadow"
        >
          Submit
        </button>
          </form>
        </div>
       

       

        {/* Purchase Main Billing Table */}
        <div className="mt-5">
          <Purchase_Billing_table />
        </div>
      </div>
    </>
  );
};

export default Purchase_info;
