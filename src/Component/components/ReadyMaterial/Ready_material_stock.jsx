import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import $ from "jquery";
import axios from "axios";

import Ready_material_modal from "./Ready_material_modal";

function Ready_material_stock() {
  const [formData, setFormData] = React.useState({});
  const [tableData, setTableDate] = React.useState([]);
  const [id, setId] = React.useState(0);

  const [category,setCategory]= React.useState([]);
  const [sub_category,setSub_Category]= React.useState([]);

  let getCategories = ()=>{
    axios.get('/product_category').then((res)=>{
      const {product_categories} = res.data;
      console.log(product_categories);
      setCategory(product_categories);
    }).catch(err=>console.log(err))
  }

  let getSubCategories = (id)=>{
    axios.get(`/ready_stocks/subs/${id}`).then((res)=>{
      const {ready_products} = res.data;
      console.log(ready_products);
      setSub_Category(ready_products);
    }).catch(err=>console.log(err))
  }
  let selectedItemId = (e)=>{
    const {name,value} = e.currentTarget;
    setId(value);
  }
  const loadTableData = () => {
    axios.get("/ready_stocks").then((res) => {
      const { ready_products } = res.data;
      setTableDate(ready_products);
    });
  };

  let onCategorySelected = (e)=>{
      const {name,value} = e.currentTarget;
      getSubCategories(value);
  }
  let onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .patch(`/ready_stocks/${id}`, { ready_product: formData })
      .then((res) => {
        console.log(res);
        loadTableData();
        setFormData({});
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
    getCategories()
    loadTableData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-footer">
        {/* Material Form */}
        <div className="container-fluid">
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
                        value={formData['product_category_id']||'none'}
                        onChange={(e)=>{onChange(e);onCategorySelected(e)}}
                      >
                        <option value="none" disabled>Select</option>
                       {
                         category.map((cat=>
                         <option value={cat.id}>{cat.category_name}</option>
                         ))
                       }
                      </select>
                    </div>
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
                        value={formData['product_name']||'none'}
                        onChange={(e)=>{ onChange(e);selectedItemId(e)}}
                      >
                        <option value="none" disabled>Select</option>
                        {
                          sub_category.map(cat=>(
                          <option value={cat.product_id}>{`${cat.product_name}`}</option>
                          ))
                        }
                      </select>
                    </div>

                    <div className="form-group row">
                      <label for="unit" className=" col-sm-10 col-form-label">
                      Cost Per Quantity
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="per_qty_selling_cost"
                          placeholder="Cost Per Quantity"
                          onChange={onChange}
                          value={formData['per_qty_selling_cost']||''}
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
                          placeholder="Qty"
                          onChange={onChange}
                          value={formData['qty']||''}
                        />
                      </div>
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
                          value={formData['standard_size']||''}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="standard_weight"
                        className=" col-sm-10 col-form-label"
                      >
                        Weight Weight
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="standard_weight"
                          placeholder="Standard Weight"
                          onChange={onChange}
                          value={formData['standard_weight']||''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={onSubmit}
                >
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
                  <th>Qty</th>
                  <th>Standart Size</th>
                  <th>Weight Per Unit</th>
                  <th>Cost Per Quantity</th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((cat) => (
                  <tr>
                    <td>{cat.product_category_id}</td>
                    <td>{cat.product_name}</td>
                    <td>{cat.qty}</td>
                    <td>{cat.standard_weight}</td>
                    <td>{cat.standard_size}</td>
                    <td>{cat.per_qty_selling_cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Ready Material Stock Edit Modal */}
      <Ready_material_modal />
    </>
  );
}

export default Ready_material_stock;
