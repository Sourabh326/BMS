import React from 'react'

const EditModel =()=> {
    return (
        <>
           {/*Update Popup Model */}
       <form action="">
       <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title" id="exampleModalLabel">Edit Customer</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="container-fluid" >
      <div class="modal-body">
      <div className="row">
       <div className="col-md-12">
                  
                  <div className="form-group row">
                    <label for="customer_name" className=" col-sm-10 col-form-label">Customer Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="customer_name" placeholder="Customer Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="mobile_no" className=" col-sm-10  col-form-label">Mobile Number</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="mobile_no" placeholder="Mobile Number" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="receipt_no" className=" col-sm-10  col-form-label">Receipt No.</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control"  name="receipt_no" placeholder="Receipt No.r" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="person_name" className=" col-sm-10  col-form-label">Person Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control"  name="person_name" placeholder="Person Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="amount" className=" col-sm-10  col-form-label">Amount</label>
                    <div className="col-sm-10">
                    <input type="Number" className="form-control"  name="amount" placeholder="Amount" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="description" className=" col-sm-10  col-form-label">Description</label>
                    <div className="col-sm-10">
                    <textarea type="Number" className="form-control"  name="description" placeholder="Description" ></textarea>
                    </div>
                  </div>
       </div>
      
      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-info">Update</button>
      </div>
    </div>
  </div>
</div>
</form>  
        </>
    )
}

export default EditModel;
