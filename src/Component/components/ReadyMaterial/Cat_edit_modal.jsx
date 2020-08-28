import React from "react";
import { useEffect } from "react";
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap'
import $ from 'jquery'
const Cat_edit_modal = ({cb}) => {
  const [formData,setFormData] = React.useState({});
  const [id,setId] = React.useState(null);
  const onChange = (e)=>{
    const {name,value} = e.currentTarget;
    setFormData(state=>({
      ...state,
      [name]:value
    }))
  }
  let getProductCategory = (id)=>{
    axios.get(`/product_category/${id}`).then((res)=>{
      const {product_category} = res.data;
      setFormData(product_category);
    })
  }
  useEffect(()=>{
    $('#CategoryModal').on('show.bs.modal',(e)=>{
      const id = $(e.relatedTarget).data('id');
      setId(id);
      getProductCategory(id);
    })
    $('#CategoryModal').on('hide.bs.modal',()=>{
      setFormData({});
    })
  },[])

  const handleEdit = (e)=>{
    e.preventDefault();
    axios.patch(`/product_category/${id}`,{product_category:formData}).then((res)=>{
      setFormData({});
      $("#CategoryModal").modal("toggle");
      $("#CategoryModal").modal("hide");
      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();
      cb();

    }).catch(err=>{
        console.log(err);
    })
  }

  return (
    <>
      <form  onSubmit={handleEdit} >
        {/*Update Popup Model */}
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
              <div class="modal-header bg-info">
                <h5 class="modal-title" id="CategoryModalLabel">
                  Edit Category
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
                          Category
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="category_name"
                            placeholder="Enter Category"
                            value={formData['category_name']}
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

export default Cat_edit_modal;
