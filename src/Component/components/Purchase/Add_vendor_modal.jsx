// Data insert Into the Purchase_info  Tablename and Column name is vendor_id

import React from "react";

import "bootstrap/dist/js/bootstrap";
const Add_vendor_modal = () => {
  return (
    <>
      <form>
        {/*Add New Vendor */}
        <div
          class="modal fade bd-example-modal-lg"
          id="CategoryModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" style={{ background: "#0f4c75" }}>
                <h5 class="modal-title text-white" id="CategoryModalLabel">
                  Add New Vendor
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="container-fluid">
                <div class="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group row">
                        <label
                          for="category_name"
                          className=" col-sm-10  col-form-label"
                        >
                          Vendor
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="vendor_id"
                            placeholder="Vendor name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  style={{ background: "#0f4c75" }}
                  class="btn btn-info"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Add_vendor_modal;
