import React from 'react'

const EditModel =()=> {
    return (
        <div>
               {/*Update Popup Model */}
<div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title" id="exampleModalLabel">Edit Employee</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="container-fluid" >
      <div class="modal-body">
      <div className="row">
       <div className="col-md-6">
                  <div className="form-group row">
                    <label for="cat_id" className=" col-sm-10 col-form-label">Category Id</label>
                    <div className="col-sm-10">
                     <select name="category_name" style={{width:'100%',height:'40px',border:'1px solid #dae1e7',padding:'10px',borderRadius:'4px',color:'grey'}}>
                       <option value="" >abc</option>
                       <option value="">abc</option>
                     </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="employee_name" className=" col-sm-10 col-form-label">Employee Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="employee_name" placeholder="Employee Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="city" className=" col-sm-10  col-form-label">City</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="city" placeholder="City" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="address" className=" col-sm-10  col-form-label">Address</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="address" placeholder="Address" />
                    </div>
                  </div>
       </div>
       <div className="col-md-6">
                <div className="form-group row">
                    <label for="contact_one" className=" col-sm-10  col-form-label">Contact</label>
                    <div className="col-sm-10">
                      <input type="Number" className="form-control"  name="contact_one" placeholder="Contact" />
                    </div>
                  </div>
                 <div className="form-group row">
                    <label for="contact_two" className=" col-sm-10  col-form-label">Alternate Number</label>
                    <div className="col-sm-10">
                      <input type="Number" className="form-control"  name="contact_two" placeholder="Alternate Number" />
                    </div>
                  </div>
                  
                  <div className="form-group row">
                    <label for="contact_two" className=" col-sm-10  col-form-label">Salary</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" name="basic_salary" placeholder="Salary" />
                    </div>
                  </div>
       </div>
      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-info">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default EditModel;
