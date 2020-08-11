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
    const [customer_id,setCustomer_Id] = React.useState(0);
    const [customer,setCustomer] = React.useState({});
    const [show,setShow] = React.useState(false);
  
    const loadTableData = ()=>{
      axios.get('/customers').then((res)=>{
        const {customers} = res.data;
        console.log(customers);
        setTableDate(customers);
      })
    }
  
    const Edit = (id)=>{
      setShow(true);
      setCustomer_Id(id);
      setCustomer(tableData.find((v)=>v.id===id));
    }
  
    let onSubmit = (e)=>{
      e.preventDefault();
      console.log(formData);
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
            <CustomerTable tableData={tableData} setId = {setCustomer_Id} />
            <EditModel customer={customer} customer_id={customer_id}/>
        </div>
        </>
    )
}

export default Customers;
