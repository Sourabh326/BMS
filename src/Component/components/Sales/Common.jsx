import React from "react";
import Sales_product_info from "./sales_product_info/Sales_product_info";
import Sales_transportation from "./Sales_transportation";
import Sales_info_table from "./Sales_info_table";

import Sales_Billing_table from "./Sales_Billing_table";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Common = () => {
  // for date
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  //for Form Design
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
      <div className="container-fluid">
        <div className="card card-info" id="add-vendor">
          <div className="card-header" style={formHeader}>
            <h3 className="card-title"> Sales Entry </h3>
          </div>

          {/* Sales Product Info */}
          <div className="p-3">
            <Sales_product_info />
          </div>

          <div className="pl-4">
            <h5>Sales Info</h5>
          </div>
          <form className="form-horizontal">
            <div className="card-body">
              {/* 1st Row */}

              <div className="row">
                <div className="col-md-3">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-10  col-form-label"
                    >
                      Sales date
                    </label>
                    <div className="col-sm-10">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          margin="normal"
                          name="sales_date"
                          id="date-picker-dialog"
                          label="Date picker dialog"
                          format="MM/dd/yyyy"
                          value={selectedDate}
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
                      Sales Time
                    </label>
                    <div className="col-sm-10">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-picker"
                          name="sales_time"
                          label="Time picker"
                          value={selectedDate}
                          KeyboardButtonProps={{
                            "aria-label": "change time",
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
                      className=" col-sm-12  col-form-label"
                    >
                      Transport Cost
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className=""
                        name="transport_cost"
                        placeholder="Transport Cost"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-12  col-form-label"
                    >
                      Labour Charge
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className=""
                        name="labour_charge"
                        placeholder="Labour Charge"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2nd Row */}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-12  col-form-label"
                    >
                      Discount
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className=""
                        name="discount"
                        placeholder="Discount"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-12  col-form-label"
                    >
                      Pay Amount
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className=""
                        name="pay_amount"
                        placeholder="Pay Amount"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-12  col-form-label"
                    >
                      GST Amount
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className=""
                        name="gst_amount"
                        placeholder="Gst Amount"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-12  col-form-label"
                    >
                      Old Balance
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className=""
                        name="old_balance"
                        placeholder="Gst Amount"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-12  col-form-label"
                    >
                      Net Amount
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className=""
                        name="net_amount"
                        placeholder="Net Amount"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-12  col-form-label"
                    >
                      Current balance Amount
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className=""
                        name="current_balance_amount"
                        placeholder="Gst Amount"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3rd Row */}
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-12  col-form-label"
                    >
                      Receipt No.
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className=""
                        name="receipt_no"
                        placeholder="Receipt Number"
                      />
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
                <div className="col-md-6">
                  <div className="form-group mt-3 row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                    <div className="col-md-6">
                      <FormControlLabel
                        value="excluding_gst"
                        name="gst_including_excluding_type"
                        labelPlacement="top"
                        control={<Radio />}
                        label="Excluding Gst"
                      />
                    </div>
                    <div className="col-md-6">
                      <FormControlLabel
                        value="excluding_gst"
                        name="gst_including_excluding_type"
                        labelPlacement="top"
                        control={<Radio />}
                        label="Excluding Gst"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer bg-white ">
              <div className="row">
                <div className="col-md-4">
                  <button
                    type="submit"
                    style={button}
                    className="btn btn-block  shadow"
                  >
                    Add in List
                  </button>
                </div>
              </div>
            </div>

            {/* Sales info table */}
            <div className="my-5">
              <Sales_info_table />
            </div>

            {/* Tranaportation */}
            <div className="my-4">
              <Sales_transportation />
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
       

        {/* Sales Billing Table */}
        <div className="mt-5">
          <Sales_Billing_table />
        </div>
      </div>
    </>
  );
};

export default Common;
