import React,{useEffect} from 'react'
import $ from 'jquery';

const Purchase_transportation_info =()=> {
  useEffect(()=>{
    $('#add-vendor').hide();
    $("#addVendorBtn").click(()=>{
      $('#add-vendor').slideToggle();
    })
 
  })

    return (
        <>
     
        <div className="container-fluid" >
          <button className="btn btn-danger  mb-5" id="addVendorBtn">Add New</button>
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Purchase Transportation Info</h3>
              </div>
              
              <form className="form-horizontal" >
                <div className="card-body">
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
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add Vendor</button>
                  <button type="submit" className="btn btn-default float-right cancle">Cancel</button>
                </div>
               
              </form>
            </div>
        </div>
       
        </>
    )
}

export default Purchase_transportation_info;
