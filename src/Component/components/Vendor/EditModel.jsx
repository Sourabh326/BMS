import React from "react";
import axios from "axios";
import { useEffect } from "react";
import $ from "jquery";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const EditModel = ({ cb }) => {
  const [formData, setFormData] = React.useState({});
  const [id, setId] = React.useState(null);
  let onChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };
  let getVendor = (id) => {
    axios.get(`/vendors/${id}`).then((res) => {
      setFormData(res.data.vendor);
    });
  }
  
  const doEdit = (e) => {
    if (formData["person_name"].length < 3) {
      alert("name is empty");
      return;
    }
    e.preventDefault();
    axios.patch(`/vendors/${id}`, { vendor: formData })
      .then((res) => {
          console.log(res.data);
        cb();
        toast.success('🦄 Updated Successfully !', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
           $("#exampleModal").modal("toggle");
        $("#exampleModal").modal("hide");
        $("body").removeClass("modal-open");
        $(".modal-backdrop").remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    $('#exampleModal').on('show.bs.modal',(e)=>{
      const id = $(e.relatedTarget).data('id');
      setId(id);
      getVendor(id);
    })
    $('#exampleModal').on('hide.bs.modal',()=>{
      setFormData({});
    })
  },[])

  return (
    <div>
      <form onSubmit={doEdit}>
        <div
          class="modal fade bd-example-modal-lg"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-info">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Vendor Entry
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
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          for="person_name"
                          className=" col-sm-10 col-form-label"
                        >
                          Person Name
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="person_name"
                            placeholder="Person Name"
                            value={formData["person_name"] || ""}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="company_name"
                          className=" col-sm-10  col-form-label"
                        >
                          Company Name
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="company_name"
                            placeholder="Company name"
                            value={formData["company_name"] || ""}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="city"
                          className=" col-sm-10  col-form-label"
                        >
                          City
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            placeholder="City Name"
                            value={formData["city"] || ""}
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
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Address"
                            value={formData["address"] || ""}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          for="email_id"
                          className=" col-sm-10  col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="email_id"
                            placeholder="Email"
                            value={formData["email_id"] || ""}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="contact_one"
                          className=" col-sm-10  col-form-label"
                        >
                          Contact Number
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="contact_one"
                            placeholder="Contact Number"
                            value={formData["contact_one"] || ""}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="contact_two"
                          className=" col-sm-10  col-form-label"
                        >
                          Alternate Contact Number
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="contact_two"
                            placeholder="Alternet Contact Number"
                            value={formData["contact_two"] || ""}
                            onChange={onChange}
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
                <button type="button" class="btn btn-info" onClick={doEdit}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditModel;