import React from "react";
import axios from "axios";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useEffect } from "react";

const Production_form = ({
  handleSubmit,
  onChange,
  formData,
  category,
  setSub_Category,
  sub_category,
  selectedItemId,
}) => {
  const handleDateChange = (date) => {
    onChange({ currentTarget: { name: "production_date", value: date } });
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

  // let handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post("/productions", { production: formData })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  let getSubCategories = (id) => {
    axios
      .get(`/ready_stocks/subs/${id}`)
      .then((res) => {
        const { ready_products } = res.data;
        console.log(ready_products);
        setSub_Category(ready_products);
      })
      .catch((err) => console.log(err));
  };

  let onCategorySelected = (e) => {
    const { name, value } = e.currentTarget;
    getSubCategories(value);
  };

  const today = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
  };

  return (
    <>
      <div className="card card-info">
        <div className="card-header" style={formHeader}>
          <h3 className="card-title">Production Info</h3>
        </div>

        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
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
                    className="form-control col-sm-10"
                    value={formData["product_category_id"] || "none"}
                    onChange={(e) => {
                      onChange(e);
                      onCategorySelected(e);
                    }}
                  >
                    <option value="none">Select</option>
                    {category.map((cat, i) => (
                      <option key={i} value={cat.id}>
                        {cat.category_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                  <label
                    htmlFor="default-outline-select"
                    className=" col-sm-10 col-form-label"
                  >
                    Select Product Name
                  </label>
                  <select
                    id="default-outline-select"
                    name="product_name"
                    className="form-control col-sm-10"
                    value={formData["product_name"] || "none"}
                    onChange={(e) => {
                      onChange(e);
                      selectedItemId(e);
                    }}
                  >
                    <option value="none">Select</option>
                    {sub_category.map((cat, i) => (
                      <option
                        key={i}
                        value={cat.product_id}
                      >{`${cat.product_name}`}</option>
                    ))}
                  </select>
                </div>

                {/* datepicker */}
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    name="production_date"
                    id="date-picker-dialog"
                    label="Choose Date"
                    format="MM/dd/yyyy"
                    value={formData["production_date"] || today() }
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label
                    htmlFor="production_qty"
                    className=" col-sm-10  col-form-label"
                  >
                    Production Quantity
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="production_qty"
                      onChange={onChange}
                      placeholder="Production Quantity"
                      value={formData["production_qty"] || ""}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="total_production_cost"
                    className=" col-sm-10  col-form-label"
                  >
                    Total Production Cost
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="2000"
                      onChange={onChange}
                      name="total_production_cost"
                      value={formData["total_production_cost"]||''}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Raw Material Table Under Form . Fetch data from Raw material Stock Table*/}
          <RawMaterialStockTable />

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
    </>
  );
};

// Raw material Stock Table . Fetch data from Raw material Stock Table.
const RawMaterialStockTable = () => {
  return (
    <>
      <table className="table table-responsive-sm table-bordered">
        <thead style={{ backgroundColor: "#0f3460", color: "#fff" }}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Raw Product name</th>
            <th scope="col">Raw Material Per Unit Qty</th>
            <th scope="col">Raw Material Total Qty</th>
            <th scope="col">Raw Material Per Unit Rate</th>
            <th scope="col">Raw Material Total Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </>
  );
};

export default Production_form;
