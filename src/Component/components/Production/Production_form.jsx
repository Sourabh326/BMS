import React from "react";
import Axios from "axios";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const Production_form = () => {
  const [formData, setFormData] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  let button = {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "sans-serif",
    backgroundColor: "#e11d74",
    border: "none",
    boxShadow: "10px 5px -3px (#ccc)",
  };
  let canclebutton = {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "sans-serif",
    backgroundColor: "#2d4059",
    border: "none",
    boxShadow: "10px 5px -3px (#ccc)",
  };
  let formHeader = {
    backgroundColor: "#0f4c75",
  };

  let onChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("/productions", { production: formData })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="card card-info">
        <div className="card-header" style={formHeader}>
          <h3 className="card-title">Production Info</h3>
        </div>

        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                  <label
                    for="default-outline-select"
                    className=" col-sm-10 col-form-label"
                  >
                    Product category
                  </label>
                  <select
                    id="default-outline-select"
                    onChange={onChange}
                    name="ready_product_id"
                    class="form-control col-sm-10"
                  >
                    <option disabled>Select</option>
                    <option value="">Brick</option>
                    <option value="1">Fly Aish</option>
                  </select>
                </div>
                <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
                  <label
                    for="default-outline-select"
                    className=" col-sm-10 col-form-label"
                  >
                    Product Name
                  </label>
                  <select
                    id="default-outline-select"
                    onChange={onChange}
                    name="product_name"
                    class="form-control col-sm-10"
                  >
                    <option disabled>Select</option>
                    <option value="">Rope Brick</option>
                    <option value="1">Fly Brick</option>
                  </select>
                </div>
                
                {/* datepicker */}
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    name="production_date"
                    id="date-picker-dialog"
                    label="Choose Date"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label
                    for="production_qty"
                    className=" col-sm-10  col-form-label"
                  >
                    Production Quantity
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="production_qty"
                      onChange={onChange}
                      placeholder="Production Quantity"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="total_production_cost"
                    className=" col-sm-10  col-form-label"
                  >
                    Total Production Cost
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="2000"
                      onChange={onChange}
                      name="total_production_cost"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* Raw Material Table Under Form . Fetch data from Raw material Stock Table*/}
           <RawMaterialStockTable />

          <div className="card-footer">
            <button type="submit" style={button} className="btn btn-info">
              Submit <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
            <button
              type="submit"
              style={canclebutton}
              className="btn btn-dark cancle ml-4"
            >
              Cancel <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

// Raw material Stock Table . Fetch data from Raw material Stock Table.
const RawMaterialStockTable = () =>{
  return(
    <>
          <table class="table table-responsive-sm table-bordered">
  <thead style={{backgroundColor:'#0f3460',color:'#fff'}}>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Raw Product name</th>
      <th scope="col">Raw Material Per Unit Qty</th>
      <th scope="col">Raw Material Total Qty</th>
      <th scope="col">Raw Material Per Unit Rate</th>
      <th scope="col">Raw Material Total Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table><hr/>
    </>
  )
}


export default Production_form;
