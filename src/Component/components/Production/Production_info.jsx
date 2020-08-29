import React from 'react'
import Navbar from '../../Navbar/Navbar'
import ProductionTable from './Production_table'
import Production_form from './Production_form'
import axios from 'axios'
import { useEffect } from 'react'
const Production_info =()=> {

  const [formData ,setFormData] = React.useState({});
  const [category, setCategory] = React.useState([]);
  const [sub_category, setSub_Category] = React.useState([]);
  const [id, setId] = React.useState(0);



  let selectedItemId = (e) => {
    const { name, value } = e.currentTarget;
    console.log(value);
    setId(value);
  };


  let getCategories = () => {
    axios
      .get("/product_category")
      .then((res) => {
        const { product_categories } = res.data;
        console.log(product_categories);
        setCategory(product_categories);
      })
      .catch((err) => console.log(err));
  };

  let getSubCategories = (id) => {
    axios
      .get(`/ready_stocks/subs/${id}`)
      .then((res) => {
        const { ready_products } = res.data;
        console.log(ready_products);
        setSub_Category(ready_products);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formData);
    
  }

  let onChange = (e) => {
    console.log(e.currentTarget);
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };
  

  useEffect(()=>{
    getCategories();
    getSubCategories();
  },[])

    return (
        <>
       <Navbar />
        <div className="main-footer">
          <Production_form  setFormData={setFormData} onChange={onChange} formData={formData} handleSubmit={handleSubmit} category={category}  sub_category={sub_category} setSub_Category={setSub_Category} selectedItemId={selectedItemId} />
          <ProductionTable /> 
        </div>
        </>
    )
}

export default Production_info
