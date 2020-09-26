import React, { useState } from "react";

import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Sales_product_info = () => {
 
  

  // For purchase Product
  const [puchaseProductData, setPuchaseProductData] = React.useState({
    raw_material_id:'',
    unit:'',
    qty:'',
    unit_price:'',
    gst_encluding_excluding_type:'',
    gross_amount:'',
    gst_percent:'',
    gst_amount:'',
    net_amount:'',
  });

  // onChnage for purchase_product_info
  const onPurchaseProductChange = (e) => {
    let { name, value } = e.currentTarget;
    setPuchaseProductData((state) => ({
      ...state,
      [name]: value,
    }));
    console.clear();
    console.log(puchaseProductData)
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
    <div>
        <div className="pt-3">
            <h5>Sales Product Info</h5>
        </div>
      <form >
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
              <label
                htmlFor="default-outline-select"
                className=" col-sm-10 col-form-label"
              >
               Unit
              </label>
              <select
                id="default-outline-select"
                name="qty"
                onChange={()=>onPurchaseProductChange}
                className=" col-md-10 col-sm-4 "
                value={puchaseProductData['qty']}
              >
                <option value="none">Select</option>
                
                  <option value=""> kg </option>
                
              </select>
            </div>
          </div>
          <div className="col-md-6">
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
                  className="qty"
                  name="Receipt No"
                  placeholder="Receipt No"
                  onChange={()=>onPurchaseProductChange}
                  value={puchaseProductData['Receipt No']}
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
                Unit Price
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="per_unit_rate"
                  name="per_unit_rate"
                  placeholder="Unit price"
                  onChange={()=>onPurchaseProductChange}
                  value={puchaseProductData['per_unit_rate']}
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
                  name="qty"
                  placeholder="Quantity"
                  onChange={()=>onPurchaseProductChange}
                  value={puchaseProductData['qty']}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group row mt-3">
              <FormControlLabel
                value="top"
                name="gst_encluding_excluding_type"
                control={<Radio color="primary" />}
                label="Enclude GST"
                labelPlacement="top"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group row mt-3">
              <FormControlLabel
                value="top"
                name="gst_encluding_excluding_type"
                control={<Radio color="primary" />}
                label="Exclude GST"
                labelPlacement="top"
              />
            </div>
          </div>
        </div>
        {/* 3rd Row */}
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
                  readOnly
                  placeholder="Gross Amount"
                  onChange={()=>onPurchaseProductChange}
                  value={puchaseProductData['gross_amount']  }
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
                  onChange={()=>onPurchaseProductChange}
                  value={puchaseProductData['gst_percent']}
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
                  onChange={()=>onPurchaseProductChange}
                  value={puchaseProductData['gst_amount']}
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
                  onChange={()=>onPurchaseProductChange}
                  value={puchaseProductData['net_amount']}
                />
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
        <hr style={{ border: "1px solid #e0ece4", width: "100%" }} />
      </form>
    </div>
  );
};

export default Sales_product_info;
