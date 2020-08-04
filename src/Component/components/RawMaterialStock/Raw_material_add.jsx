import React from 'react'

function Raw_material_add() {
    return (
        <div className="main-footer">
            <div className="container-fluid" >
              <div className="card card-info" >
              <div className="card-header">
                <h3 className="card-title">Raw Material Stock Entry</h3>
              </div>
              <form className="form-horizontal" >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                    <div className="form-group row">
                    <label for="product_name" className=" col-sm-10 col-form-label">Product Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="product_name" placeholder="Product Name" />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="person_name" className=" col-sm-10 col-form-label">Unit</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="unit" placeholder="Unit" />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="qty" className=" col-sm-10 col-form-label">Quantity</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="qty" placeholder="Quantity" />
                    </div>
                    </div>
                   <div className="form-group row">
                   <button type="submit" className="btn btn-info" >Entry Now</button>
                   <button type="submit" className="btn btn-default float-right cancle mx-3">Cancel</button>
                   </div>
                     </div>
                    </div>
                    </div>
                </form>
              </div>
           </div>
          </div>
        
    )
}

export default Raw_material_add;
