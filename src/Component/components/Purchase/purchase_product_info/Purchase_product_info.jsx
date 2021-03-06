import React, { useEffect, useState } from "react";
import axios from "axios";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const Purchase_product_info = () => {
  const [rawStock, setRawStock] = useState([]);
  useEffect(() => {
    axios.get("/raw_stocks").then((res) => {
      setRawStock(res.data.raw_materials);
    });
  }, []);

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
    
  };
  
  
  
  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/purchase_product_info", { purchases_product: puchaseProductData })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      

    // Tostify
    toast("🦄 Purchase Product Added !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
      <form onSubmit={handleSubmit} >
        <div className="row">
          <div className="col-md-6">
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
                onChange={()=>onPurchaseProductChange}
                className=" col-md-10 col-sm-4 "
                value={puchaseProductData['raw_material_id']}
              >
                <option value="none">Select</option>
                {rawStock.map((row) => (
                  <option value={row.product_id}> {row.product_name} </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
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
                onChange={()=>onPurchaseProductChange}
                className=" col-md-10 col-sm-4 "
                value={puchaseProductData['unit']}
              >
                <option value="none">Select</option>
                {rawStock.map((row) => (
                  <option value={row.unit}> {row.unit} </option>
                ))}
              </select>
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
                  className="unit_price"
                  name="unit_price"
                  placeholder="Unit price"
                  onChange={()=>onPurchaseProductChange}
                  value={puchaseProductData['unit_price']}
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

export default Purchase_product_info;
