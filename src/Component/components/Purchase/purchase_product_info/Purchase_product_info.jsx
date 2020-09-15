import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";

const Purchase_product_info = (props) => {
  const [rawStock, setRawStock] = useState([]);
  useEffect(() => {
    axios.get("/raw_stocks").then((res) => {
      setRawStock(res.data.raw_materials);
    });
  },[]);

  // Calculation for gross amount

 let unit_price = $(".unit_price").val();
 let qty = $(".qty").val();
 const grossAmount = unit_price * qty;


  return (
    <div>
      <div className="row">
        <div className="col-md-3">
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
              onChange={props.onChange}
              className=" col-md-10 col-sm-4 "
            >
              <option value="none">Select</option>
              {rawStock.map((row) => (
                <option value={row.product_id}> {row.product_name} </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
            <label
              htmlFor="default-outline-select"
              className=" col-sm-10 col-form-label"
            >
              Unit{" "}
              <span style={{ fontSize: "13px", color: "silver" }}>
                {" "}
                (Ex: Kg, Little, etc.)
              </span>
            </label>
            <select
              id="default-outline-select"
              name="unit"
              onChange={props.onChange}
              className=" col-md-10 col-sm-4 "
            >
              <option value="none">Select</option>
              {rawStock.map((row) => (
                <option value={row.unit}> {row.unit} </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group row">
            <label
              htmlFor="production_qty"
              className=" col-sm-10  col-form-label"
            >
              Unit Price
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="unit_price"
                name="unit_price"
                placeholder="Unit Price"
                onChange={props.onChange}
               
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
              Quantity
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="qty"
                readOnly=""
                name="qty"
               
                placeholder="Quantity"
                onChange={props.onChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Row */}
      <div className="row">
        <div className="col-md-3">
          <div className="form-group row">
            <label
              htmlFor="production_qty"
              className=" col-sm-10  col-form-label"
            >
              Gross Amount
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="gross_amount"
                name="gross_amount"
                placeholder="Gross Amount"
                onChange={props.onChange}
                value={grossAmount}
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
              GST (%)
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className=""
                name="gst_percent"
                placeholder="Unit Price"
                onChange={props.onChange}
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
              GST Amount
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className=""
                name="gst_amount"
                placeholder="Unit Price"
                onChange={props.onChange}
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
              Net Amount
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className=""
                name="net_amount"
                placeholder="Quantity"
                onChange={props.onChange}
              />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ border: "1px solid #e0ece4", width: "100%" }} />
    </div>
  );
};

export default Purchase_product_info;
