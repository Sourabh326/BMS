import React from "react";
import Navbar from "../../Navbar/Navbar";
import $ from "jquery";
import axios from "axios";
import Ready_material_modal from "./Ready_material_modal";
import Raw_material_product from "./Raw_material_product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

toast.configure();

function Ready_material_stock() {
  const [formData, setFormData] = React.useState({});
  const [form2Data, setForm2Data] = React.useState({});
  
  const [tableData, setTableData] = React.useState([]);
  const [table2Data, setTable2Data] = React.useState([]);
  const [id, setId] = React.useState(0);

  const [category, setCategory] = React.useState([]);
  const [sub_category, setSub_Category] = React.useState([]);


  let getCategories = () => {
    axios
      .get("/product_category")
      .then((res) => {
        const { product_categories } = res.data;
        console.log(product_categories);
        setCategory(product_categories);
      })
      .catch((err) => console.log(err));
  };

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

  let selectedItemId = (e) => {
    const { name, value } = e.currentTarget;
    console.log(value);
    setId(value);
  };
  const loadTableData = () => {
    axios.get("/ready_stocks/forTable").then((res) => {
      const { tableData } = res.data;
      console.log(tableData);
      setTableData(tableData);
    });
  };

  let onCategorySelected = (e) => {
    const { name, value } = e.currentTarget;
    getSubCategories(value);
  };
  let onSubmit = (e) => {
    e.preventDefault();

    var used_quantity = $("form input[name='qty']").val();
    var used_material_per_unit_rate = $(
      "form input[name='used_material_per_unit_rate'"
    ).val();

    if (used_quantity === "") {
      toast.error("🦄 Used Quantity Should be Required !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    // if(unit===''){
    //   toast.error("🦄 Unit Should be Required !", {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   return;
    // }
    if (used_material_per_unit_rate === "") {
      toast.error("🦄 Used Material Rate Should be Required !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    toast.success("🦄 Added Successfully !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    let product_name = formData.product_name;
    let t = sub_category.find((p) => p.product_name === product_name);
    let id = t.product_id;

    let required_data = [];

    console.log(form2Data);

    Object.entries(form2Data).forEach((e)=>{
      let key = e[0].split('-')[0];
      let index = e[0].split('-')[1];
      let value =e[1];
      if(key==='product_id'){
        let id = e[0].split('-')[2];
        required_data[index]={
          ...required_data[index],
          ['raw_material_id']:id,
          ['ready_product_id']:t.product_id
         }
      }
      else{
      required_data[index]={
        ...required_data[index],
        [key]:value,
       }
      }
    });

    console.log(required_data);
    required_data.map((data)=>{
      axios.post('/manufacturing',{manufacturing_raw_qty:data}).then((res)=>{
        if(res.status===200){
          console.log('send');
        }
      })
    })

    // axios
    //   .patch(`/ready_stocks/${id}`, { ready_product: formData })
    //   .then((res) => {
    //     console.log(res);
    //     loadTableData();
    //     setFormData({});
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  let onChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  // Styles
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

  let getRawStocks = ()=>{
    axios.get('/raw_stocks').then((res)=>{
      const {raw_materials} = res.data;
      console.log(raw_materials);
      setTable2Data(raw_materials);
    })
  }

  useEffect(() => {
    getCategories();
    loadTableData();
    getRawStocks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-footer">
        {/* Material Form */}
        <div className="container-fluid">
          <div className="card card-info" id="add-vendor">
            <div className="card-header" style={formHeader}>
              <h3 className="card-title">List New Product</h3>
            </div>
            <form className="form-horizontal" onSubmit={onSubmit}>
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
                        <option value="none" disabled>
                          Select
                        </option>
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
                        <option value="none" disabled>
                          Select
                        </option>
                        {sub_category.map((cat, i) => (
                          <option
                            key={i}
                            value={cat.product_name}
                          >{`${cat.product_name}`}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="qty"
                        className=" col-sm-10 col-form-label"
                      >
                        Quantity
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="qty"
                          placeholder="Quantity"
                          onChange={onChange}
                          value={formData["qty"] || ""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label
                        htmlFor="standard_size"
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
                          value={formData["standard_size"] || ""}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="standard_weight"
                        className=" col-sm-10 col-form-label"
                      >
                        Standard Weight
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="standard_weight"
                          placeholder="Weight Per Unit"
                          onChange={onChange}
                          value={formData["standard_weight"] || ""}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="per_qty_selling_cost"
                        className=" col-sm-10 col-form-label"
                      >
                        Per Quantity Selling Cost
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="per_qty_selling_cost"
                          placeholder="Cost Per Quantity"
                          onChange={onChange}
                          value={formData["per_qty_selling_cost"] || ""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Raw Material Product */}
              <Raw_material_product formData={form2Data} setFormData={setForm2Data} tableData={table2Data} />

              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={onSubmit}
                  style={button}
                >
                  Add Stock{" "}
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
                <button
                  className="btn btn-default ml-4 cancle"
                  style={canclebutton}
                >
                  Cancel <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Material Table Featch Fata From Ready Product Stock */}

        <div className="card-header" style={formHeader}>
          <h3 className="card-title text-white">Ready Material Stock</h3>
        </div>

        <table
          id="example1"
          className="table table-sm table-responsive-lg table-striped bg-white"
        >
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Product Name</th>
              <th>Qty</th>
              <th>Standart Size</th>
              <th>Weight Per Unit</th>
              <th>Cost Per Quantity</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((data, i) => (
              (data.id===data.product_category_id)?
                 <tr key={i}>
                <td>{data.category_name}</td>
                <td>{data.product_name}</td>
                <td>{data.qty}</td>
                <td>{data.standard_weight}</td>
                <td>{data.standard_size}</td>
                <td>{data.per_qty_selling_cost}</td>
                <td>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                  <i className="fas fa-pencil-alt ml-3 "></i>{" "}
                </td>
              </tr>:null
            ))}
          </tbody>
        </table>
      </div>

      {/* Ready Material Stock Edit Modal */}
      <Ready_material_modal />
    </>
  );
}
export default Ready_material_stock;
