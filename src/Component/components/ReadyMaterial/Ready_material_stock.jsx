<<<<<<< Updated upstream
import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import $ from "jquery";
import axios from "axios";
=======
import React,{useEffect} from 'react'
import Navbar from '../../Navbar/Navbar'
import Ready_material_modal from './Ready_material_modal'

import $ from 'jquery';
>>>>>>> Stashed changes

function Ready_material_stock() {
  const [formData, setFormData] = React.useState({});
  const [tableData, setTableDate] = React.useState([]);
  const [rm_id, setRm_id] = React.useState(0);
  const [rawMaterial, setRawMaterial] = React.useState({});

  const loadTableData = () => {
    axios.get("/raw_stocks").then((res) => {
      const { vendors } = res.data;
      setTableDate(vendors);
    });
  };
  const Edit = (id) => {
    setRm_id(id);
    setRawMaterial(tableData.find((v) => v.vendor_id === id));
  };

  let deleteVendor = (id) => {
    axios
      .delete(`/raw_stocks/${id}`)
      .then((res) => {
        console.log(res);
        loadTableData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("/raw_stocks", { vendor: formData })
      .then((res) => {
        loadTableData();
        $("#add-vendor").slideToggle();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let onChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  useEffect(() => {
    $("#add-vendor").hide();
    $("#addVendorBtn").click(() => {
      $("#add-vendor").slideToggle();
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-footer">
        {/* Material Form */}
        <div className="container-fluid">
<<<<<<< Updated upstream
          <button className="btn btn-danger  mb-5" id="addVendorBtn">
            Add New
          </button>
          <div className="card card-info" id="add-vendor">
            <div className="card-header">
              <h3 className="card-title">Add Ready Material</h3>
            </div>

            <form className="form-horizontal" onSubmit={onSubmit}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                      <label
                        for="default-outline-select"
                        className=" col-sm-10 col-form-label"
                      >
                        Product Category
                      </label>
                      <select
                        id="default-outline-select"
                        name="product_category_id"
                        class="form-control col-sm-10"
                      >
                        <option disabled>Select</option>
                        <option value="">1</option>
                        <option value="1">2</option>
                      </select>
                    </div>
=======
        <button className="btn btn-danger  mb-5" id="addVendorBtn">Add New</button>
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Add Ready Material</h3>
              </div>
              
              <form className="form-horizontal" >
                <div className="card-body">
                  <div className="row">
                  <div className="col-md-6">
                    
                     <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
	                    <label for="default-outline-select" className=" col-sm-10 col-form-label">Product Category</label>
	                    <select id="default-outline-select" name="product_category_id" class="form-control col-sm-10">
	                  	 <option disabled>Select</option>
	                  	 <option value="">1</option>
                       <option value="1" >2</option>
                    	</select>
                      </div>
>>>>>>> Stashed changes

                    <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                      <label
                        for="default-outline-select"
                        className=" col-sm-10 col-form-label"
                      >
                        Select Product Name
                      </label>
                      <select
                        id="default-outline-select"
                        name="product_name"
                        class="form-control col-sm-10"
                      >
                        <option disabled>Select</option>
                        <option value="">1</option>
                        <option value="1">2</option>
                      </select>
                    </div>

<<<<<<< Updated upstream
                    <div className="form-group row">
                      <label for="unit" className=" col-sm-10 col-form-label">
                        Unit
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="unit"
                          placeholder="Unit"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label for="qty" className=" col-sm-10 col-form-label">
                        Qty
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="qty"
                          placeholder="Unit"
                          onChange={onChange}
                        />
                      </div>
=======
                     <div className="form-group row">
                     <label for="unit" className=" col-sm-10 col-form-label">Unit</label>
                     <div className="col-sm-10">
                      <input type="text" className="form-control"  name="unit" placeholder="Kg" />
                     </div>
                     </div>

                     
                  <div className="form-group row">
                    <label for="qty" className=" col-sm-10 col-form-label">Qty</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="qty" placeholder="Unit" />
                    </div>
                    </div>
                  </div>  
                  <div className="col-md-6">

                    <div className="form-group row">
                    <label for="standard_size" className=" col-sm-10 col-form-label">Standard Size</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="standard_size" placeholder="Standard Size" />
                    </div>
>>>>>>> Stashed changes
                    </div>

                    <div className="form-group row">
                      <label
                        for="standard_size"
                        className=" col-sm-10 col-form-label"
                      >
                        Standard Size
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="standard_size"
                          placeholder="Standard Size"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="standard_weight"
                        className=" col-sm-10 col-form-label"
                      >
                        Weight Per Unit
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="standard_weight"
                          placeholder="Standard Size"
                          onChange={onChange}
                        />
                      </div>
                    </div>
<<<<<<< Updated upstream
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-info" onClick={onSubmit}>
                  Add Stock
                </button>
                <button type="submit" className="btn btn-default ml-4 cancle">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Material Table */}
        <div className="card bg-info">
          <div className="card-header">
            <h3 className="card-title">Ready Material Stock</h3>
          </div>

          <div className="card-body">
            <table
              id="example1"
              className="table table-responsive-lg table-striped bg-white"
            >
              <thead>
                <tr>
                  <th style={{ width: "200px" }}>Product Category</th>
                  <th>Product Name</th>
                  <th>Unit</th>
                  <th>Qty</th>
                  <th>Standart Size</th>
                  <th>Weight Per Unit</th>
                  <th>Total Weight</th>
                  <th>Cost Per Quantity</th>
=======

                    <div className="form-group row">
                    <label for="per_qty_selling_cost" className=" col-sm-10 col-form-label">Cost Per Quantity</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="per_qty_selling_cost" placeholder="Cost Per Quantity" />
                    </div>
                    </div>
                    
                  </div>
                  </div>
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add Stock in Ready Material</button>
                  <button type="submit" className="btn btn-default ml-4 cancle">Cancel</button>
                </div>
               
              </form>
            </div>
        </div>       
       

          {/* Material Table */}
            <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Ready Material Stock</h3>
            </div>
            
            <div className="card-body">
              <table id="example1" className="table table-sm table-responsive-lg table-striped bg-white">
                <thead >
                    <tr>
                      <th>Product Category</th>
                      <th>Product Name</th>
                      <th>Unit</th>
                      <th>Qty</th>
                      <th>Standart Size</th>
                      <th>Weight Per Unit</th>
                      <th>Total Weight</th>
                      <th>Cost Per Quantity</th>
                      <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                      <td>abc</td>
                      <td>Cement</td>
                      <td>2 Unit</td>
                      <td>22 pcs</td>
                      <td>336</td>
                      <td>22</td>
                      <td>1234</td>
                      <td>22rs</td>
                      <td><i class="fas fa-edit btn btn-success btn-xs" data-toggle="modal" data-target="#ReadyMaterialStockModal"> Edit</i>
                      <button className="btn btn-danger btn-xs ml-3"><i class="fas fa-trash"></i> Delete</button></td>
>>>>>>> Stashed changes
                </tr>
              </thead>
              <tbody>
                {tableData.map((raw_material) => (
                  <tr>
                    <td>abc</td>
                    <td>Cement</td>
                    <td>2 Unit</td>
                    <td>22 pcs</td>
                    <td>336</td>
                    <td>22</td>
                    <td>1234</td>
                    <td>22rs</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
<<<<<<< Updated upstream
      </div>
    </>
  );
=======
        
   {/* Ready Material Stock Edit Modal */}
   <Ready_material_modal />

        </>
    )
>>>>>>> Stashed changes
}

export default Ready_material_stock;
