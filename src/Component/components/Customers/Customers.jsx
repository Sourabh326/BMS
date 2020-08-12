import React from 'react'
import Navbar from '../../Navbar/Navbar';
import CustomerForm,{CustomerTable} from './Common';
import EditModel from './EditModel'
import $ from 'jquery'
import axios from 'axios'
import { useEffect } from 'react';

const Customers =()=> {
    const [formData, setFormData] = React.useState({});
    const [tableData,setTableDate] = React.useState([]);
  
    const loadTableData = ()=>{
      axios.get('/customers').then((res)=>{
        const {customers} = res.data;
        console.log(customers);
        setTableDate(customers);
      })
    }
  
  
    let onSubmit = (e)=>{
      e.preventDefault();
      axios.post('/customers',{customer:formData}).then((res)=>{
        loadTableData();
        $('#add-vendor').slideToggle();
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
    
    return (
        <>
        <Navbar />
        <div className="main-footer">
            <CustomerForm onSubmit={onSubmit} onChange={onChange}  loadTableData={loadTableData}/>
            <CustomerTable tableData={tableData} loadTableData={loadTableData}/>
            <EditModel cb={loadTableData}/>
        </div>
        </>
    )
}

export default Customers;
