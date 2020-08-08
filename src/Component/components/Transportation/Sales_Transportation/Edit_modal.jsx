import React from 'react'

const Edit_modal =()=> {
    return (
       <>
       <form action="">
    {/*Update Popup Model */}
<div class="modal fade bd-example-modal-lg" id="PurchaseTransportationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title" id="exampleModalLabel">Edit Purchase Transportation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="container-fluid" >
      <div class="modal-body">
      <div className="row">
       <div className="col-md-6">
       <div className="form-group row">
                    <label for="cat_id" className=" col-sm-10 col-form-label">Raw Material</label>
                    <div className="col-sm-10">
                     <select name="raw_material_id " style={{width:'100%',height:'40px',border:'1px solid #dae1e7',padding:'10px',borderRadius:'4px',color:'grey',background:'white'}}>
                       <option disabled>Choose Category</option>
                       <option value="">abc</option>
                     </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="cat_id" className=" col-sm-10 col-form-label">Transportation Type</label>
                    <div className="col-sm-10">
                     <select name="transportation_cat_id" style={{width:'100%',height:'40px',border:'1px solid #dae1e7',padding:'10px',borderRadius:'4px',color:'grey',background:'white'}}>
                       <option disabled>Choose Category</option>
                       <option value="">abc</option>
                     </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="vehicle_name" className=" col-sm-10  col-form-label">Vehicle Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="vehicle_name" placeholder="Vehicle Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="vehicle_no" className=" col-sm-10  col-form-label">Vehicle No.</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="vehicle_no" placeholder="Vehicle No." />
                    </div>
                  </div>
       </div>
       <div className="col-md-6">
       <div className="form-group row">
                    <label for="driver_name" className=" col-sm-10  col-form-label">Driver Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="driver_name" placeholder="Driver Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="driver_contact_no" className=" col-sm-10  col-form-label">Driver Contact Number</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" name="driver_contact_no" placeholder="Driver Contact Numbe" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="no_of_trip_a_day" className=" col-sm-10  col-form-label">Total No. Of Trip</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" name="no_of_trip_a_day" placeholder="Ex: 5" />
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

export default Edit_modal
