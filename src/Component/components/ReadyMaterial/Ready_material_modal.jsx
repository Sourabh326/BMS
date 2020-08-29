import React from "react";
import { useEffect } from "react";
import axios from 'axios'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap'
export const Ready_material_modal = () => {
  // unfinished
  const [id,setId] = React.useState(null);
  const [formData,setFormData] = React.useState({});
  const getItem =(id)=>{
    axios.get(`/ready_stocks/${id}`).then((res)=>{
      const {ready_product} = res.data;
      setFormData(ready_product);
    })
  }
  useEffect(()=>{
    $('#ReadyMaterialStockModal').on('show.bs.modal',(e)=>{
      const id = $(e.relatedTarget).data('id');
      getItem(id);
      setId(id);
    })

    $('#ReadyMaterialStockModal').on('hide.bs.modal',(e)=>{
      setFormData({})
    })
  },[])
  return (
    <>
      <form action="">
        {/*Update Popup Model */}
        <div
          className="modal fade bd-example-modal-lg"
          id="ReadyMaterialStockModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-info">
                <h5 className="modal-title" id="CategoryModalLabel">
                  Edit Ready Material Stock
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="container-fluid">
                <div className="modal-body">
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
                        >
                          <option disabled>Select</option>
                          <option value="">1</option>
                          <option value="1">2</option>
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
                        >
                          <option disabled>Select</option>
                          <option value="">1</option>
                          <option value="1">2</option>
                        </select>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="unit" className=" col-sm-10 col-form-label">
                          Unit
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="unit"
                            placeholder="Kg"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="qty" className=" col-sm-10 col-form-label">
                          Qty
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="qty"
                            placeholder="Unit"
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
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="standard_weight"
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
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="per_qty_selling_cost"
                          className=" col-sm-10 col-form-label"
                        >
                          Cost Per Quantity
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="per_qty_selling_cost"
                            placeholder="Cost Per Quantity"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-info">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Ready_material_modal;
