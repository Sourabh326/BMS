import React, { useEffect } from "react";
import Employee_table from "./Employee_table"
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import EditModel from "./EditModel";
import Category_modal from "./Category_modal";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";



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
  // for date
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
  let formHeader = {
    backgroundColor: "#0f4c75",
  };
  let button = {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "sans-serif",
    backgroundColor: "#e11d74",
    border: "none",
    boxShadow: "10px 5px -3px (#ccc)",
    
  };
  return (
    <>
      <Navbar />
      <div className="main-footer">
        <div className="container-fluid">
          
          <div className="card">
            <div className="card-header" style={formHeader} >
              <h3 className="card-title text-white">Employee Entry</h3>
            </div>

            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
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
                          className=" col-md-10 col-sm-4 "
                          
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
                          className=""
                          value={formData["employee_name"]||''}
                          name="employee_name"
                          placeholder="Company name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    
                  </div>
                  <div className="col-md-4">
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
                          className=""
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
                          className=""
                          value={formData["contact_two"]||''}
                          name="contact_two"
                          placeholder="Alternet Contact Number"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-md-4">
                  <div className="form-group row">
                      <label for="city" className=" col-sm-10  col-form-label">
                        City
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className=""
                          value={formData["city"] ||''}
                          name="city"
                          placeholder="City Name"
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
                          className=""
                          value={formData["basic_salary"]||'0'}
                          name="basic_salary"
                          placeholder="Basic Salary"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-md-6">
                  <div className="form-group row">
                      <label
                        for="address"
                        className=" col-sm-10  col-form-label"
                      >
                        Address
                      </label>
                      <div className="col-sm-12">
                        <textarea
                          className="form-control"
                          value={formData["address"]||''}
                          name="address"
                          placeholder="Address"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-group row">
                    <label
                      htmlFor="production_qty"
                      className=" col-sm-10  col-form-label"
                    >
                      Purchase date
                    </label>
                    <div className="col-sm-10">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          margin="normal"
                          name="purchase_date"
                          id="date-picker-dialog"
                          label="Date picker dialog"
                          format="MM/dd/yyyy"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                      </MuiPickersUtilsProvider>
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
                  style={button}
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
        {/* Employee Table */}
        <Employee_table />
          

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
