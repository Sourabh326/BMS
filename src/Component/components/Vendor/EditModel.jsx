import React from 'react'

const  EditModel = ()=> {
    return (
        <div>
            
<div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title" id="exampleModalLabel">Edit Vendor Entry</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="container-fluid" >
      <div class="modal-body">
      <div className="row">
       <div className="col-md-6">
       <div className="form-group row">
                    <label for="person_name" className=" col-sm-10 col-form-label">Person Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="person_name" placeholder="Person Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="company_name" className=" col-sm-10  col-form-label">Company Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="company_name" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="city" className=" col-sm-10  col-form-label">City</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="city" placeholder="City Name" />
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
                    <label for="email_id" className=" col-sm-10  col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="email_id" placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="contact_one" className=" col-sm-10  col-form-label">Contact Number</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" name="contact_one" placeholder="Contact Number" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="contact_two" className=" col-sm-10  col-form-label">Alternate Contact Number</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" name="contact_two" placeholder="Alternet Contact Number" />
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
