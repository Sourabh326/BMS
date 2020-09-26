import React from "react";
import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap";
import $ from "jquery";
import axios from 'axios'

const EditModel = ({employee,employee_id,cb,setShowEditModal}) => {
  const [formData, setFormData] = React.useState({ ...employee});
  const [categories,setCategories] = React.useState([]);

  let onChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };
  // data-toggle="modal" data-target="#exampleModal"
  const doEdit = (e) => {
    e.preventDefault();
    axios
      .patch(`/employees/${employee_id}`, { employee: formData })
      .then((res) => {
        console.log(res.data);
        cb();
      $("#exampleModal").modal("toggle");
      setShowEditModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategories = ()=>{
    axios.get('/employees/categories').then((res)=>{
      const {categories} = res.data;
      setCategories(categories);
    })
  }


  useEffect(() => {
    setFormData({...employee})
    $(document).ready(() => {
      $("#exampleModal").modal("toggle");
    });
    getCategories();
  }, []);

 
  return (
    <div>
      <form onSubmit={doEdit} >
        {/*Update Popup Model */}
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
              <div class="modal-header" >
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Employee
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
                          for="cat_id"
                          className=" col-sm-10 col-form-label"
                        >
                          Category Id
                        </label>
                        <div className="col-sm-10">
                          <select
                          onChange={onChange}
                          value={formData['cat_id']}
                            name="cat_id"
                            style={{
                              width: "100%",
                              height: "40px",
                              border: "1px solid #dae1e7",
                              padding: "10px",
                              borderRadius: "4px",
                              color: "grey",
                            }}
                          >
                            <option value="none"> Choose one category </option>
                            {
                              categories.map((category)=>(
                              <option value={category.id}>{category.category_name}</option>
                              ))
                            }
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="employee_name"
                          className=" col-sm-10 col-form-label"
                        >
                          Employee Name
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                          onChange={onChange}
                            value={formData['employee_name']||''}
                            className="form-control"
                            name="employee_name"
                            placeholder="Employee Name"
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
                            onChange={onChange}
                            className="form-control"
                            name="city"
                            placeholder="City"
                            value={formData['city']}

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
                            onChange={onChange}
                            className="form-control"
                            name="address"
                            placeholder="Address"
                            value={formData['address']}

                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          for="contact_one"
                          className=" col-sm-10  col-form-label"
                        >
                          Contact
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            onChange={onChange}
                            className="form-control"
                            name="contact_one"
                            placeholder="Contact"
                            value={formData['contact_one']}

                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="contact_two"
                          className=" col-sm-10  col-form-label"
                        >
                          Alternate Number
                        </label>
                        <div className="col-sm-10">
                          <input
                          onChange={onChange}
                            type="text"
                            className="form-control"
                            name="contact_two"
                            placeholder="Alternate Number"
                            value={formData['contact_two']}
                            
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          for="contact_two"
                          className=" col-sm-10  col-form-label"
                        >
                          Salary
                        </label>
                        <div className="col-sm-10">
                          <input
                          onChange={onChange}
                            type="text"
                            className="form-control"
                            name="basic_salary"
                            placeholder="Salary"
                            value={formData['basic_salary']}
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
