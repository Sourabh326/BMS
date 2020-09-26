import axios from "axios";
// Insert Data Into Purchase_transportation_info Table In Databse

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Transport_info_table from "./Transport_info_table";

toast.configure();


const Purchase_transportation = () => {

const[formData , setFormData]=React.useState({})

const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post("/purchase_transport_info",{purchases_transport:formData}).then((res)=>{
    console.log(res);
  }).catch((err)=>{ console.log(err); })
  
   // Tostify 
   toast('🦄 Purchase Transportation Added !', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

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
      
              <div>
                <h4>Purchase Transportation</h4>
              </div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
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
                    onChange={onChange}
                    className=" col-sm-10"
                    value={formData['raw_material_id']}
                  >
                    <option value="none">Select</option>
                    <option value="2">Gypsum</option>
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
                      className=""
                      name="driver_name"
                      placeholder="Driver Name"
                      onChange={onChange}
                      value={formData['driver_name']}
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
                      value={formData['vehicle_name']}
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
                      value={formData['driver_contact_no']}
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
                      value={formData['vehicle_no']}
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
                      value={formData['no_of_trip_a_day']}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="row">
            <div className="col-md-4">
            <button type="submit" style={button} className="btn btn-block shadow">
              Add in List
            </button>
            </div>
          </div>
        </form>
         {/* Purchase Transportation table */}
         <div className="my-2">
          <Transport_info_table />
        </div>
     
    </>
  );
};

export default Purchase_transportation;
