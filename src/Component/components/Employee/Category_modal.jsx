import React from "react";
import "bootstrap/dist/js/bootstrap";
import $ from "jquery";
import { useEffect } from "react";
function Category_modal({AddCategory,setCategories,setshowAddCategoryModal}) {

  const [formData, setFormData] = React.useState({});

  let handleChange = (e)=>{
    let {name,value}  = e.currentTarget;
    setFormData((state)=>({
      ...state,
      [name]:value
    }))
  }
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    AddCategory(formData);
    $("#categoryModal").modal("toggle");
    setshowAddCategoryModal(false);
  }

  useEffect(() => {
    $(document).ready(() => {
      $("#categoryModal").modal("show");
    });
  }, []);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          class="modal fade bd-example-modal-lg"
          id="categoryModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-info">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add New Category
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
                          className=" col-sm-10 col-form-label"
                        >
                          Category
                        </label>
                        <div className="col-sm-10">
                          <input
                            value={formData['category_name']||''}
                            type="text"
                            className="form-control"
                            name="category_name"
                            placeholder="Enter Category"
                            onChange={handleChange}
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
                  onClick={()=>{setshowAddCategoryModal()}}
                >
                  Close
                </button>
                <button type="button" class="btn btn-info" onClick={handleSubmit}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Category_modal;
