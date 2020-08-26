import React from 'react'
import { useState } from 'react'
import Axios from 'axios';

const ProductionTable =()=> {
  const [tableData , setTableData]= useState([]);
  Axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    const data = res.data;
    setTableData(data)
  })
  

    return (
       <>
       <div className="card bg-info">
            <div className="card-header">
            <h3 className="card-title"> Production Details </h3>
            </div>
            
            <div className="card-body">
              <table id="example1" className="table table-sm table-responsive table-striped bg-white">
                <thead className="">
                    <tr>
                      <th>Product Category</th>
                      <th>Product Name</th>
                      <th>Unit</th>
                      <th>Qty</th>
                      <th>Standart Size</th>
                      <th>Weight Per Unit</th>
                      <th>Total Weight</th>
                      <th>Production Date</th>
                      <th>Production Qty</th>
                      <th>Total Production Cost</th>
                      <th>Date</th>
                     
                       </tr>
                </thead>
                <tbody>
                {
                tableData.map(record=>(
                  <tr>
                      <td> {record.id} </td>
                      <td>{record.name} </td>
                      <td>{record.username} </td>
                      <td>{record.address.street} </td>
                      <td>{record.phone} </td>
                      <td>{record.website} </td>
                      <td>12:20pm</td>
                      <td>Gst Percent</td>
                      <td>12-12-12</td>
                      <td>1233</td>
                      <td>12-23-32</td>
                </tr>
                ))
              
              }
                
               
                </tbody>
               
              </table>
            </div>
           
          </div>
       </>
    )
}

export default ProductionTable;
