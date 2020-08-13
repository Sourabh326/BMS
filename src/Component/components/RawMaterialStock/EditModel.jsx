import React, { useEffect } from 'react'
import { useState } from 'react';
import $ from 'jquery'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const EditModel =({cb})=> {
  const [id,setId] = React.useState(null);
  const [formData, setFormData] = React.useState({});


  let onChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };


  const handleEdit =(e)=>{
    e.preventDefault();
    axios.patch(`/raw_stocks/${id}`, { raw_material: formData })
      .then((res) => {
          console.log(res.data);
        cb();
        toast.success('🦄 Updated Successfully !', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        $("#RawMaterialleModal").modal("toggle");
        $("RawMaterialleModal").modal("hide");
        $("body").removeClass("modal-open");
        $(".modal-backdrop").remove();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const getRawStock =(id)=>{
    axios.get(`/raw_stocks/${id}`).then((res)=>{
      const {raw_material} = res.data;
      setFormData(raw_material[0]);
    })
  }
  useEffect(()=>{
    $('#RawMaterialleModal').on('show.bs.modal',e=>{
      const id = $(e.relatedTarget).data('id');
      console.log(id);
      setId(id);
      getRawStock(id);
    })
    $('#RawMaterialleModal').on('hide.bs.modal',e=>{
      setFormData({});
    })
  },[])
  return (
        <>
    {/*Update Popup Model */}
       <form onSubmit={handleEdit} >
       <div class="modal fade bd-example-modal-lg" id="RawMaterialleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title" id="exampleModalLabel">Edit Raw Material</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="container-fluid" >
      <div class="modal-body">
      <div className="row">
       <div className="col-md-12">
                  
                  <div className="form-group row">
                    <label for="product_name" className=" col-sm-10 col-form-label">Product Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="product_name" placeholder="Product Name" value={formData['product_name']} onChange={onChange}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="unit" className=" col-sm-10  col-form-label">Unit</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="unit" placeholder="Unit" value={formData['unit']} onChange={onChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="qty" className=" col-sm-10  col-form-label">Quantity</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control"  name="qty" placeholder="Quantity" value={formData['qty']} onChange={onChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="qty" className=" col-sm-10  col-form-label">Rate</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control"  name="rate" placeholder="Rate" value={formData['rate']} onChange={onChange} />
                    </div>
                  </div>
                 
       </div>
      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-info" onClick={handleEdit}>Update</button>
      </div>
    </div>
  </div>
</div>
</form>  
        </>
    )
}

export default EditModel;
