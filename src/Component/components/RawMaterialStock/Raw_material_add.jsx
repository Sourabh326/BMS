import React, { useEffect } from "react";
import $ from "jquery";
import axios from "axios";

const Raw_material_add = ({cb}) => {
  const [formData, setFormData] = React.useState({});

  const onChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };
  
const handleSubmit = (e)=>{
  e.preventDefault();
  axios.post('/raw_stocks',{raw_material_stock:formData}).then((res)=>{
    console.log(res.data);
    $("#add-vendor").slideToggle();
    // clean the from after submitting
    setFormData({})
    //load raw stock table data
    cb();
  }).catch((err)=>{ console.log(err); })
}

  useEffect(() => {
    $("#add-vendor").hide();
    $("#addVendorBtn").click(() => {
      $("#add-vendor").slideToggle();
    });
  },[]);

  return (
    <>
      <div className="main-footer">
        <div className="container-fluid">
          <button className="btn btn-danger  mb-5" id="addVendorBtn">
            Add New
          </button>
          <div className="card card-info" id="add-vendor">
            <div className="card-header">
              <h3 className="card-title">Raw Material Stock Entry</h3>
            </div>
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group row">
                      <label
                        for="product_name"
                        className=" col-sm-10 col-form-label"
                      >
                        Product Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="product_name"
                          placeholder="Product Name"
                          onChange={onChange}
                          value={FormData["unit"]}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="person_name"
                        className=" col-sm-10 col-form-label"
                      >
                        Unit
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="unit"
                          placeholder="Unit"
                          onChange={onChange}
                          value={FormData["unit"]}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="qty" className=" col-sm-10 col-form-label">
                        Quantity
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="qty"
                          placeholder="Quantity"
                          onChange={onChange}
                          value={FormData["qty"]}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="qty" className=" col-sm-10 col-form-label">
                        Rate
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="rate"
                          placeholder="Rate"
                          onChange={onChange}
                          value={formData["rate"]}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <button type="submit" className="btn btn-info" onClick={handleSubmit}>
                        Entry Now
                      </button>
                      <button
                        type="submit"
                        className="btn btn-default float-right cancle mx-3"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Raw_material_add;
