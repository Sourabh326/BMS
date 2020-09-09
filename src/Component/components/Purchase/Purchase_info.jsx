import React from "react";
import Navbar from "../../Navbar/Navbar";
import Purchase_table from "./Purchase_table";
import DateFnsUtils from "@date-io/date-fns";
import Purchase_product_info from "./Purchase_product_info";
import Transport_info_table from './Transport_info';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";


const Purchase_info = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  let button = {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "sans-serif",
    backgroundColor: "#e11d74",
    border: "none",
    boxShadow: "10px 5px -3px (#ccc)",
  };
  let canclebutton = {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "sans-serif",
    backgroundColor: "#2d4059",
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
            <h3 className="card-title">Personal Info</h3>
          </div>

          <form className="form-horizontal">
            <div className="card-body">
              {/* 1st Row Vendor (Personal Info) */}
              {/* Insert data in Purchase_info table */}

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                    <label
                      htmlFor="default-outline-select"
                      className=" col-sm-10 col-form-label"
                    >
                      Product Category
                    </label>
                    <select
                      id="default-outline-select"
                      name="product_category_id"
                      className="form-control col-md-10 col-sm-4 mt-4"
                    >
                      <option disabled value="none">
                        Select
                      </option>
                      <option>Mukesh</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
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
                <hr />
                <div className="col-md-4">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-10  col-form-label"
                    >
                      Purchase date
                    </label>
                    <div className="col-sm-10">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-picker"
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
              <hr style={{ border: "1px solid #e0ece4", width: "100%" }} />

              {/* 2nd Row Purchase From */}
              {/* Insert data into Purchase_product_info table */}

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                    <label
                      htmlFor="default-outline-select"
                      className=" col-sm-10 col-form-label"
                    >
                      Raw Material
                    </label>
                    <select
                      id="default-outline-select"
                      name="raw_material_id"
                      className="form-control col-md-10 col-sm-4 "
                    >
                      <option disabled value="none">
                        Select
                      </option>
                      <option>Brcik</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                    <label
                      htmlFor="default-outline-select"
                      className=" col-sm-10 col-form-label"
                    >
                      Unit
                    </label>
                    <select
                      id="default-outline-select"
                      name="unit"
                      className="form-control col-md-10 col-sm-4 "
                    >
                      <option disabled value="none">
                        Select
                      </option>
                      <option>Kg</option>
                    </select>
                  </div>
                </div>
                <hr />
                <div className="col-md-4">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-10  col-form-label"
                    >
                      Quantity
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="qty"
                        placeholder="Production Quantity"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3rd Row */}
              {/* Insert data into Purchase_info */}

              <div className="row p-2" style={{backgroundColor:'#f1f3de'}}>
                <div className="col-md-4">
                  <div className="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                    <div className="col-md-6">
                      <FormControlLabel
                        value="including_gst"
                        control={<Radio />}
                        label="Including Gst"
                      />
                    </div>
                    <div className="col-md-6">
                      <FormControlLabel
                        value="excluding_gst"
                        control={<Radio />}
                        label="Excluding Gst"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group row">
                        <label
                          htmlFor="production_qty"
                          className=" col-sm-10  col-form-label"
                        >
                          GST (%)
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="gst_percent"
                            placeholder="Ex: 18%"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group row">
                        <label
                          htmlFor="production_qty"
                          className=" col-sm-10  col-form-label"
                        >
                          GST Amount
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="gst_amount"
                            placeholder="GST Amount"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group row">
                        <label
                          htmlFor="production_qty"
                          className=" col-sm-10  col-form-label"
                        >
                          Total Amount
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="net_amount"
                            placeholder="Ex: 12333 /-"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="card-footer">
              <button type="submit" style={button} className="btn btn-info">
                Submit <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
              <button
                type="submit"
                style={canclebutton}
                className="btn btn-dark cancle ml-4"
              >
                Cancel <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>

         {/* Temprerily Table Component */}
         <Purchase_product_info />

        
        {/* Tansport Info Table */}
        <Transport_info_table />

        {/* Purchase Main Table */}
        <Purchase_table />

      </div>
    </>
  );
};

export default Purchase_info;
