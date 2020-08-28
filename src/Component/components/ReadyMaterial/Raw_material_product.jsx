import React from "react";
import $ from "jquery";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import { useEffect } from "react";

toast.configure();

const Raw_material_product = () => {
  const [tableData, setTableData] = React.useState([]);
  const [formData, setFormData] = React.useState({});

  const handleChange = (e) => {
    if (e.currentTarget.type === "checkbox") {
      const {name,checked} = e.currentTarget;
      setFormData((state)=>({
        ...state,
        [name]:checked
      }))
    } else {
      const { name, value } = e.currentTarget;
      setFormData((state) => ({
        ...state,
        [name]: value,
      }));
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // var used_quantity = $(".used_quantity").val();
    // var used_material_per_unit_rate = $(".used_material_per_unit_rate").val();
    // var unit = $(".unit").val();

    // if (used_quantity === "") {
    //   toast.error("🦄 Used Quantity Should be Required !", {
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
    // if (unit === "") {
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
    // if (used_material_per_unit_rate === "") {
    //   toast.error("🦄 Used Material Rate Should be Required !", {
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

    let rows = tableData.length;
    let product =0;
    let f = true;
    for (let i = 0; i < rows; i++) {
      if (formData[`isChecked-${i}`]) {
        f = false;
      let used_quantity =  Number(formData[`used_quantity-${i}`] ||0)
        // let used_material_per_quntity =  Number(formData[`raw_material_per_quantity-${i}`]||0)
      let used_material_per_unit_rate =    Number(formData[`used_material_per_unit_rate-${i}`]||0);
        product+=used_quantity*used_material_per_unit_rate;
      }
    }
    product = f?0:product;
    $('input[name="total_cost"]').val(product);
  }
  const loadTableData = () => {
    Axios.get("/raw_stocks").then((res) => {
      const { raw_materials } = res.data;
      console.log(raw_materials);
      setTableData(raw_materials);
    });
  };
  useEffect(() => {
    loadTableData();
  }, []);

  // Insert in database tablename- manufacturing_raw_qty_info
  return (
    <>
      <div class="container mt-100">
        <div class="row">
          <div class="col-md-12">
            <div class="card bg-light">
              <div class="card-header">
                <h4>Raw Material Cost </h4>
              </div>
              <div class="card-block">
                <div class="table-responsive">
                  <form
                    action=""
                    onSubmit={handleSubmit}
                    className="form-horizontal"
                  >
                    <table
                      class="table display bg-light table-hover table-bordered"
                      id="table_id"
                    >
                      <thead>
                        <tr>
                          <th>Select</th>
                          <th>Raw Material</th>
                          <th>Used Quantity (kg)</th>
                          <th>Raw Material per Quantity</th>
                          <th>Used Material Per Unit Rate</th>
                          <th colSpan="1">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((item, i) => (
                          <tr key={item.product_id}>
                            <td>
                              <input
                                type="checkbox"
                                id="checkbox"
                                style={{ width: "50px", height: "20px" }}
                                name={`isChecked-${i}`}
                                checked={formData[`isChecked-${i}`]||false}
                                onChange={handleChange}
                              />
                            </td>
                            <td class="tabledit-view-mode">
                              <span class="tabledit-span">
                                {item.product_name}
                              </span>
                            </td>
                            <td>
                              <input
                                type="Number"
                                className="form-control used_quantity"
                                name={`used_quantity-${i}`}
                                value={formData[`used_quantity-${i}`] | ""}
                                placeholder="0.00"
                                onChange={handleChange}
                              />
                            </td>
                            <td>
                              <input
                                type="Number"
                                className="form-control raw_material_per_quantity"
                                name={`raw_material_per_quantity-${i}`}
                                placeholder="2 kg"
                                value={
                                  formData[`raw_material_per_quantity-${i}`] ||
                                  ""
                                }
                                onChange={handleChange}
                              />
                            </td>
                            <td>
                              <input
                                type="Number"
                                className="form-control used_material_per_unit_rate"
                                name={`used_material_per_unit_rate-${i}`}
                                onChange={handleChange}
                                value={
                                  formData[`used_material_per_unit_rate-${i}`] |
                                  item.rate
                                }
                                placeholder="0.00"
                              />
                            </td>
                            <td>
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-light">
                        <tr>
                          <th colSpan="6">
                            <button
                              type="submit"
                              className="btn btn-success float-right btn-lg"
                            >
                              Apply
                            </button>
                          </th>
                        </tr>
                        <tr className="text-secondary">
                          <th colSpan="4">
                            <div className="float-right mt-3">
                              <h5>Total Cost</h5>
                              <h5>Per Pcs Cost</h5>
                            </div>
                          </th>
                          <th colSpan="1">
                            <div className="text-center">
                              <input
                                type="Number"
                                className="form-control"
                                name="total_cost"
                                placeholder="0.00"
                                readOnly="readonly"
                              />
                              <input
                                type="Number"
                                className="form-control"
                                name="per_pcs_cost"
                                placeholder="0.00"
                                readOnly="readonly"
                              />
                            </div>
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Raw_material_product;
