import React from 'react'
import $ from 'jquery'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Raw_material_product = () => {

function handleSubmit(e){
  e.preventDefault(); 
  var used_quantity = $(".used_quantity").val();
  var used_material_per_unit_rate = $(".used_material_per_unit_rate").val();
  var unit = $(".unit").val();

  if(used_quantity===''){
   toast.error("🦄 Used Quantity Should be Required !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
  }
  if(unit===''){
    toast.error("🦄 Unit Should be Required !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return;
  }
  if(used_material_per_unit_rate===''){
    toast.error("🦄 Used Material Rate Should be Required !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return;
  } 
}  

// Insert in database tablename- manufacturing_raw_qty_info
  return (
    <>
      <div class="container mt-100">
        <div class="row">
          <div class="col-md-12">
            <div class="card bg-light">
              <div class="card-header">
              <h4>Raw Material Cost </h4>    
              </div>
              <div class="card-block">
                <div class="table-responsive">
                <form action="" onSubmit={handleSubmit} className="form-horizontal">
                  <table
                    class="table display bg-light table-hover table-bordered"
                    id="table_id"
                  >
                    <thead>
                      <tr>
                        <th>Select</th>
                        <th>Raw Material</th>
                        <th>Used Quantity (kg)</th>
                        <th>Unit</th>
                        <th>Used Material Per Unit Rate</th>
                        <th colSpan="2">Action</th>
                      </tr>
                    </thead>
                    <tbody> 
                      
                        <tr>
                        <td><input type="checkbox" id="checkbox" style={{width:'50px',height:'20px'}} /></td>
                        <td class="tabledit-view-mode">
                      <span class="tabledit-span">Electricity</span>
                        </td>
                        <td>
                          <input
                            type="Number"
                            className="form-control used_quantity"
                            name=""
                            placeholder="0.00"/>
                        </td>
                        <td>
                          <input
                            type="Number"
                            className="form-control unit"
                            name=""
                            placeholder="2 kg" />
                        </td>
                        <td>
                          <input
                            type="Number"
                            className="form-control used_material_per_unit_rate"
                            name=""
                            placeholder="0.00" />
                        </td>
                        <td>
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </td>
                      </tr>
                         
                    </tbody>
                    <tfoot className="bg-light">
                      <tr>
                        <th colSpan="6"><button type="submit" className="btn btn-success float-right btn-lg">Apply</button></th>
                      </tr>
                      <tr className="text-secondary">
                        <th colSpan="4">
                          <div className="float-right mt-3">
                            <h5>Total Cost</h5>
                            <h5>Per Pcs Cost</h5>
                          </div>
                        </th>
                        <th colSpan="2">
                          <div className="text-center">
                          <input
                            type="Number"
                            className="form-control"
                            name=""
                            value=""
                            placeholder="0.00"
                            readOnly="readonly"
                          />
                           <input
                            type="Number"
                            className="form-control"
                            name=""
                            placeholder="0.00"
                            readOnly="readonly"
                          />
                          </div>
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Raw_material_product;
