import React, { useEffect } from 'react';
import EditModel from './EditModel'
import $ from 'jquery';
import Navbar from '../../Navbar/Navbar'
import axios from 'axios'

const VendorEntry = () => {

  useEffect(()=>{
    $('#add-vendor').hide();
    $("#addVendorBtn").click(()=>{
      $('#add-vendor').slideToggle();
    })
    loadTableData();
  },[])
 
  
  const [formData, setFormData] = React.useState({});
  const [tableData,setTableDate] = React.useState([]);
  const [vendor_id,setVendor_id] = React.useState(0);
  const [vendor,setVendor] = React.useState({});
  const [show,setShow] = React.useState(false);

  const loadTableData = ()=>{
    axios.get('/vendors').then((res)=>{
      const {vendors} = res.data;
      console.log(vendors);
      setTableDate(vendors);
    })
  }

  


 

  const Edit = (id)=>{
    setShow(true);
    
    setVendor_id(id);
    setVendor(tableData.find((v)=>v.vendor_id===id));
  }

  let deleteVendor= (id)=>{
    axios.delete(`/vendors/${id}`).then((res)=>{ console.log(res); loadTableData();  }).catch((err)=>{console.log(err);})
  }


  let onSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
    axios.post('/vendors',{vendor:formData}).then((res)=>{
      loadTableData();
      $('#add-vendor').slideToggle();
      setFormData({});
    }).catch((err)=>{
      console.log(err);
    }) 

  }

  let onChange = (e)=>{
    let {name,value}  = e.currentTarget;
    setFormData((state)=>({
      ...state,
      [name]:value
    }))
  }
  
   return(
       <>
       <Navbar />
       <div className="main-footer">
        <div className="container-fluid" >
          <button className="btn btn-danger  mb-5" id="addVendorBtn">Add New</button>
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title">Vendor Entry</h3>
              </div>
              
              <form className="form-horizontal"  onSubmit={onSubmit}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                    <div className="form-group row">
                    <label htmlfor="person_name" className=" col-sm-10 col-form-label">Person Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={formData['person_name']||''}  name="person_name" placeholder="Person Name" onChange={onChange}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlfor="company_name" className=" col-sm-10  col-form-label">Company Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={formData['company_name']||''}  name="company_name" placeholder="Company name"  onChange={onChange}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlfor="city" className=" col-sm-10  col-form-label">City</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={formData['city']||''}  name="city" placeholder="City Name" onChange={onChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlfor="address" className=" col-sm-10  col-form-label">Address</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={formData['address']||''}  name="address" placeholder="Address" onChange={onChange} />
                    </div>
                  </div>
                  
                    </div>
                    <div className="col-md-6">
                  <div className="form-group row">
                    <label htmlfor="email_id" className=" col-sm-10  col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={formData['email_id']||''}  name="email_id" placeholder="Email"   onChange={onChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlfor="contact_one" className=" col-sm-10  col-form-label">Contact Number</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={formData['contact_one']||''}  name="contact_one" placeholder="Contact Number" onChange={onChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlfor="contact_two" className=" col-sm-10  col-form-label">Alternate Contact Number</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={formData['contact_two']||''} name="contact_two" placeholder="Alternet Contact Number" onChange={onChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlfor="balance" className=" col-sm-10  col-form-label">Opening Balance</label>
                    <div className="col-sm-10">
                      <input type="Number" className="form-control" value={formData['balance']||''} name="balance" placeholder="Ex: 199/-" onChange={onChange} />
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


{/* Vendor Table */}
<div className="container-fluid">
<div className="row">
<div className="col-md-12">
            <div className="card">
              <div className="card-header bg-info">
                <h3 className="card-title">Vendor Table</h3>
              </div>
              
              <div className="card-body">
                <table  className="table  table-striped table-responsive" id="vendorTable">
                  <thead className="thead-dark">                  
                    <tr>
                      <th style={{width:' 10px'}}>Vendor ID</th>
                      <th>Person Name</th>
                      <th>Company Name</th>
                      <th>City</th>
                      <th>Address</th>
                      <th>Email Id</th>
                      <th>Contact</th>
                      <th>Contact</th>
                      <th>Balance</th>
                      <th colSpan="2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tableData.map((vendor)=>(
                    <tr key={vendor.vendor_id}>
                      <td style={{width:' 10px'}}>{vendor.vendor_id}</td>
                      <td>{vendor.person_name}</td>
                      <td>{vendor.company_name}</td>
                      <td>{vendor.city}</td>
                      <td>{vendor.address}</td>
                      <td>{vendor.email_id}</td>
                      <td>{vendor.contact_one}</td>
                      <td>{vendor.contact_two}</td>
                      <td>{vendor.balance}</td>
                      <td><i class="fas fa-edit btn btn-success btn-xs" data-toggle="modal" data-target="#exampleModal" onClick={()=>Edit(vendor.vendor_id)} > Edit</i></td>
                      <td><button onClick={()=>deleteVendor(vendor.vendor_id)} className="btn btn-danger btn-xs"><i class="fas fa-trash" ></i> Delete</button></td>
                   
                    </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className="card-footer clearfix">
              <div className="download_file ">
                <button className="btn btn-dark btn-sm">Download <i class="fa fa-download" aria-hidden="true"></i> </button>
              </div>
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                </ul>
              </div>
            </div>
         
          </div>
  </div>
  </div>

 </div>
 


 {/* <EditModel  vendor_id = {vendor_id} vendor={vendor} cb={loadTableData}/> */}

  {/*Update Popup Model */}
    {
   show?<EditModel  vendor_id = {vendor_id} vendor={vendor} cb={loadTableData}/>:null
    }
         </>
   )
}



export default VendorEntry;