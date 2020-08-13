import React from 'react'
import axios from 'axios'
const Raw_material_stock =({tableData,cb})=> {
  const handleDelete = (id)=>{
  axios.delete(`/raw_stocks/${id}`).then((res)=>{
      console.log(res.data);
      cb();
  }).catch((err)=>{ console.log(err); })    
  }
    return (
      <>
        <div className="main-footer">
            <div className="card bg-info">
            <div className="card-header">
              <h3 className="card-title">Raw Material Stock</h3>
            </div>
            <div className="card-body">
              <table  className="table table-responsive-lg  table-striped bg-white">
                <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Unit</th>
                      <th>Qty</th>
                      <th>Rate</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  { 
                    tableData.map((material)=>(
                    <tr>
                      <td>{material.product_name}</td>
                    <td>{material.unit}</td>
                    <td>{material.qty}</td>
                    <td>{material.rate}</td>
                      <td><i class="fas fa-edit btn btn-success btn-xs" data-id={material.product_id} data-toggle="modal" data-target="#RawMaterialleModal"> Edit</i>
                      <button onClick={()=>handleDelete(material.product_id)} className="btn btn-danger btn-xs ml-3"><i class="fas fa-trash"></i> Delete</button></td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </>
    )
}
export default Raw_material_stock;
