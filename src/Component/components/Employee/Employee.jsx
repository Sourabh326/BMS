import React, { useEffect } from "react";
import $ from "jquery";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import EditModel from "./EditModel";
import Category_modal from "./Category_modal";

function Employee() {
  const [formData, setFormData] = React.useState({});
  const [tableData, setTableDate] = React.useState([]);
  const [employee, setEmployee] = React.useState({});
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showAddCategoryModal, setshowAddCategoryModal] = React.useState(false);
  const [categories, setCategories] = React.useState([]);

  const loadTableData = () => {
    axios.get("/employees").then((res) => {
      const { employees } = res.data;
      setTableDate(employees);
    });
  };
  const AddCategory = (categories) => {
    axios
      .post("/employees/categories", {categories})
      .then((res) => {
        console.log(res.data);
        getCategories();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    $("#add-vendor").hide();
    $("#addVendorBtn").click(() => {
      $("#add-vendor").slideToggle();
    });
    getCategories();
    loadTableData();
  }, []);

  const Edit = (id) => {
    setShowEditModal(state=>!state);
    console.log(showEditModal);
    setEmployee(tableData.find((v) => v.id === id));
  };

  const getCategories = () => {
    axios.get("/employees/categories").then((res) => {
      const { categories } = res.data;
      console.log(categories);
      setCategories(categories);
    });
  };

  let deleteEmployee = (id) => {
    axios
      .delete(`/employees/${id}`)
      .then((res) => {
        console.log(res);
        loadTableData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("/employees", { employee: formData })
      .then((res) => {
        loadTableData();
        $("#add-vendor").slideToggle();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let handleChange = (e) => {
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
        <div className="container-fluid">
          <button className="btn btn-danger  mb-5" id="addVendorBtn">
            Add Employee
          </button>
          <div className="card card-info" id="add-vendor">
            <div className="card-header">
              <h3 className="card-title">Employee Entry</h3>
            </div>

            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <div className="col-sm-10">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setshowAddCategoryModal(state=>!state)}
                        >
                          Add Employee Category
                        </button>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="cat_id" className=" col-sm-10 col-form-label">
                        Category Id
                      </label>
                      <div className="col-sm-10">
                        <select
                          value={formData["cat_id"]||'none'}
                          name="cat_id"
                          style={{
                            width: "100%",
                            height: "40px",
                            border: "1px solid #dae1e7",
                            padding: "10px",
                            borderRadius: "4px",
                            color: "grey",
                            background: "white",
                          }}
                          onChange={handleChange}
                        >
                          <option value="none" disabled>
                            Choose Category
                          </option>
                          {categories.map((category,i) => (
                            <option value={category.id} key={i}>
                              {category.category_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="employee_name"
                        className=" col-sm-10  col-form-label"
                      >
                        Employee Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          value={formData["employee_name"]||''}
                          name="employee_name"
                          placeholder="Company name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="city" className=" col-sm-10  col-form-label">
                        City
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          value={formData["city"] ||''}
                          name="city"
                          placeholder="City Name"
                          onChange={handleChange}
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
                          value={formData["address"]||''}
                          name="address"
                          placeholder="Address"
                          onChange={handleChange}
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
                        Contact Number
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          value={formData["contact_one"] ||''}
                          name="contact_one"
                          placeholder="Contact Number"
                          onChange={handleChange}
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
                          value={formData["contact_two"]||''}
                          name="contact_two"
                          placeholder="Alternet Contact Number"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="basic_salary"
                        className=" col-sm-10  col-form-label"
                      >
                        Basic Salary
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="Number"
                          className="form-control"
                          value={formData["basic_salary"]||'0'}
                          name="basic_salary"
                          placeholder="Basic Salary"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={handleSubmit}
                >
                  Add Employee
                </button>
                <button
                  type="submit"
                  className="btn btn-default float-right cancle"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
{/* category modal */}
        {showAddCategoryModal ? (
          <Category_modal
            AddCategory={AddCategory}
            setCategories={setCategories}
            setshowAddCategoryModal={setshowAddCategoryModal}
          />
        ) : null}
        {/* Vendor Table */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card bg-info">
                <div className="card-header ">
                  <h3 className="card-title">Employee Details</h3>
                </div>

                <div className="card-body">
                  <table
                    className="table table-striped table-responsive-lg bg-white"
                    id="vendorTable"
                  >
                    <thead>
                      <tr>
                        <th>Cat Id</th>
                        <th>Employee Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Alternate Number</th>
                        <th>Basic Salary</th>
                        <th colSpan="2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((employee) => (
                        <tr key={employee.id}>
                          <td>{employee.id}</td>
                          <td>{employee.employee_name}</td>
                          <td>{employee.city}</td>
                          <td>{employee.address}</td>
                          <td>{employee.contact_one}</td>
                          <td>{employee.contact_two}</td>
                          <td>{employee.basic_salary}</td>
                          <td>
                            <i
                              class="fas fa-edit btn btn-success btn-xs"
                              onClick={() => Edit(employee.id)}
                            >
                              {" "}
                              Edit
                            </i>{" "}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger btn-xs"
                              onClick={() => deleteEmployee(employee.id)}
                            >
                              <i class="fas fa-trash"></i> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="card-footer clearfix">
                  <ul className="pagination pagination-sm m-0 float-right">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        &laquo;
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        &raquo;
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Model */}
      {showEditModal ? (
        <EditModel employee_id={employee.id} employee={employee} cb={loadTableData} setShowEditModal={()=>setShowEditModal(false)} />
      ) : null}
      {/* <EditModel />  */}
    </>
  );
}

export default Employee;
