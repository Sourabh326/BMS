import React  from "react";
import Navbar from "../../Navbar/Navbar";
import $ from "jquery";
import axios from "axios";
import Ready_material_modal from './Ready_material_modal'
import Raw_material_product from './Raw_material_product'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();


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

      // Validations Toastify 
      var used_quantity = $(".used_quantity").val();
      var used_material_per_unit_rate = $(".used_material_per_unit_rate").val();
      var unit = $(".unit").val();
    
      if(used_quantity===''){
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
      if(unit===''){
        toast.error("🦄 Unit Should be Required !", {
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
      if(used_material_per_unit_rate===''){
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
  };

  let onChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  

  return (
    <>
      <Navbar />
      <div className="main-footer">
        {/* Material Form */}
        <div className="container-fluid">
          
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
                        />
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-md-6">

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
                        Standard Weight
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="standard_weight"
                          placeholder="Weight Per Unit"
                          onChange={onChange}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        for="per_qty_selling_cost"
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
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Raw Material Product */}
             <Raw_material_product />
             
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
              <table id="example1" className="table table-sm table-responsive-lg table-striped bg-white">
                <thead >
                    <tr>
                      <th>Product Category</th>
                      <th>Product Name</th>
                      <th>Unit</th>
                      <th>Qty</th>
                      <th>Standart Size</th>
                      <th>Weight Per Unit</th>
                      <th>Cost Per Quantity</th>
                      <th colSpan="2">Action</th>
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
                    <td>1234</td>
                    <td>22rs</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      
    
  
       
   {/* Ready Material Stock Edit Modal */}
   <Ready_material_modal />
   </div>
    </>
    )
}
export default Ready_material_stock;
