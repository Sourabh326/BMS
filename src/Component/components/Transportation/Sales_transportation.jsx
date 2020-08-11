import React from "react";
import Navbar from "../../Navbar/Navbar";
import Sales_transportation_info from "./Sales_Transportation/Sales_transportation_info";
import Sales_transportation_table from "./Sales_Transportation/Sales_transportation_table";
import EditModel from "./Sales_Transportation/Edit_modal";
import axios from 'axios'
import $ from 'jquery'
const Sales_transportation = () => {
  const [formData, setFormData] = React.useState({});
  const [tableData, setTableDate] = React.useState([]);
  const [sale_trans_id, setSale_trans_id] = React.useState(0);
  const [sale_trans, setsaleTrans] = React.useState({});
  const [show, setShow] = React.useState(false);

  const loadTableData = ()=>{
    axios.get('/transportations').then((res)=>{
      const {transportations} = res.data;
      setTableDate(transportations);
    })
  }


  const Edit = (id)=>{
    setShow(true);
    setSale_trans_id(id);
    setsaleTrans(tableData.find((v)=>v.vendor_id===id));
  }

  let deleteSaleTransport= (id)=>{
    axios.delete(`/transportations/${id}`).then((res)=>{ console.log(res); loadTableData();  }).catch((err)=>{console.log(err);})
  }

  let onSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
    axios.post('/transportations',{transportations:formData}).then((res)=>{
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
        <Sales_transportation_info setFormData={setFormData} />
        <Sales_transportation_table tableData={tableData} />
        <EditModel  />
      </div>
    </>
  );
};

export default Sales_transportation;
