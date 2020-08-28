import React from "react";
import axios from "axios";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap";
import { useEffect } from "react";
const SubCat_edit_modal = ({cb}) => {
  const [id, setId] = React.useState(null);
  const [formData, setFormData] = React.useState({});
  const getItem = (id) => {
    axios.get(`/ready_stocks/${id}`).then((res) => {
      const { ready_product } = res.data;
      setFormData(ready_product);
    });
  };
  let onChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleEdit = (e)=>{
    e.preventDefault();
    axios.patch(`/ready_stocks/${id}`,{ready_product:formData}).then((res)=>{
      console.log(res.data);
      cb();
      $("#SubCategoryModal").modal("toggle");
      $("#SubCategoryModal").modal("hide");
      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();

    }).catch((err)=>{ console.log(err); })
  }

  useEffect(() => {
    $("#SubCategoryModal").on("show.bs.modal", (e) => {
      const id = $(e.relatedTarget).data("id");
      getItem(id);
      setId(id);
    });

    $("#SubCategoryModal").on("hide.bs.modal", (e) => {
      setFormData({});
    });
  }, []);

  return (
    <>
      <form onSubmit={handleEdit} >
        {/*Update Popup Model */}
        <div
          class="modal fade bd-example-modal-lg"
          id="SubCategoryModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-info">
                <h5 class="modal-title" id="CategoryModalLabel">
                  Edit Sub Category
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
                          for="product_name"
                          className=" col-sm-10  col-form-label"
                        >
                          Sub Category
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="product_name"
                            placeholder="Enter Sub Category"
                            onChange={onChange}
                            value={formData["product_name"]}
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
                <button type="button" class="btn btn-info" onClick={handleEdit}>
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

export default SubCat_edit_modal;
