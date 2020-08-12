import React from "react";
import $ from 'jquery'
import axios from  'axios'
import { useEffect } from "react";
const EditModel = ({cb}) => {
  const [formData, setFormData] = React.useState({});
  const [id, setId] = React.useState(null);

  const getCustomer = (id)=>{
    axios.get(`/customers/${id}`).then((res) => {
      setFormData(res.data.customer[0]);
    });
  }


  let onChange = (e)=>{
    let {name,value}  = e.currentTarget;
    setFormData((state)=>({
      ...state,
      [name]:value
    }))
  }


  useEffect(() => {
    $("#exampleModal").on("shown.bs.modal", (e) => {
      let id = $(e.relatedTarget).data("id");
      setId(id);
      getCustomer(id);
    });
    $("#exampleModal").on("hide.bs.modal", () => {
      setFormData({});
    });
  }, []);

  const DoUpdate = (e)=>{
    e.preventDefault();
    axios
      .patch(`/customers/${id}`, {customer: formData })
      .then((res) => {
        console.log(res.data);
        cb();
        $("#exampleModal").modal("toggle");
        $("exampleModal").modal("hide");
        $("body").removeClass("modal-open");
        $(".modal-backdrop").remove();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <form action="">
        {/*Update Popup Model */}
        <div
          class="modal fade bd-example-modal-lg"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-info">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Customer
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
                          for="customer_name"
                          className=" col-sm-10 col-form-label"
                        >
                          Customer Name
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="customer_name"
                            placeholder="Customer Name"
                            value={formData['customer_name']||''}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="mobile_no"
                          className=" col-sm-10  col-form-label"
                        >
                          Mobile Number
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="mobile_no"
                            placeholder="Mobile Number"
                            value={formData['mobile_no']||''}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="address"
                          className=" col-sm-10  col-form-label"
                        >
                          Address
                        </label>
                        <div className="col-sm-10">
                          <textarea
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Address"
                            value={formData['address']||''}
                            onChange={onChange}
                          ></textarea>
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
                <button type="button" class="btn btn-info" onClick={DoUpdate} >
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

export default EditModel;
