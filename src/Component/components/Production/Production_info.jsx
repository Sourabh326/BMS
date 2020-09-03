import React from "react";
import Navbar from "../../Navbar/Navbar";
import ProductionTable from "./Production_table";
import Production_form from "./Production_form";
import axios from "axios";
import { useEffect } from "react";
import moment from 'moment'
const Production_info = () => {
  const [formData, setFormData] = React.useState({
    production_qty:0,
    production_date:moment().format('YYYY-MM-DD'),
    entry_date_time:moment().format('YYYY-MM-DD HH:mm:ss')
  });
  console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
  const [categories, setCategories] = React.useState([]);
  const [sub_categories, setSub_Categories] = React.useState([]);
  const [id, setId] = React.useState(0);
  const [tableData, setTableData] = React.useState([]);
  const [production_table2Data, production_setTable2Data] = React.useState([]);

  let selectedItemId = (e) => {
    const { name, value } = e.currentTarget;
    setId(value);
    getProductions(value);
    axios
    .get(`/manufacturing/ready_product/${value}`)
    .then((res) => {
      let { manufacturing_raw_qty: manufacturing_data } = res.data;
      console.log(manufacturing_data);  
      let required_data = [];
      let total_production_cost = 0;
      manufacturing_data.forEach((data) => {
        let raw_material_per_total_qty =
          data.raw_material_per_unit_qty * formData['production_qty'];
        let raw_material_per_total_rate = raw_material_per_total_qty * data.raw_material_per_unit_rate;
          let _data = {
            ['product_name']:data.product_name,
            [`raw_material_per_unit_qty`]:data.raw_material_per_unit_qty,
            [`raw_material_per_total_qty`]:raw_material_per_total_qty,
            [`raw_material_per_total_rate`]:raw_material_per_total_rate,
            [`raw_material_per_unit_rate`]:data.raw_material_per_unit_rate,
        };
      total_production_cost+=raw_material_per_total_rate; 
      console.log(total_production_cost);
      required_data.push(_data);
      });
      setTableData((state)=>([
        ...required_data
      ]))
      setFormData((state)=>({
        ...state,
        ['total_production_cost']:total_production_cost
      }))
    })
    .catch((err) => {
      console.log(err);
    });

  };

  let getCategories = () => {
    axios
      .get("/product_category")
      .then((res) => {
        const { product_categories } = res.data;
        // console.log(product_categories);
        setCategories(product_categories);
      })
      .catch((err) => console.log(err));
  };
  let getProductions = (id) => {
    axios.get(`/productions/forTable/${id}`).then((res) => {
      const { tableData } = res.data;
      console.log(tableData);
      production_setTable2Data(tableData);
    });
  };

  let getSubCategories = (id) => {
    axios
      .get(`/ready_stocks/subs/${id}`)
      .then((res) => {
        const { ready_products } = res.data;
        // console.log(ready_products);
        setSub_Categories(ready_products);
      })
      .catch((err) => console.log(err));
  };

  const updateReadyProduction = (data, product_id) => {
    axios
      .patch(`ready_stocks/${product_id}`, { qty: data["production_qty"] })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let { product_category_id, ...rest } = formData;
    // console.log(rest);
    updateReadyProduction(rest, rest["ready_product_id"]);
    console.log(rest);
    axios.patch(`ready_stocks/${id}`,{ready_product:{[`qty`]:rest['production_qty']}}).then((res)=>{
      console.log('ready stokcs updated');
    }).catch((err)=>{ console.log('ready stocks not updated'); });
    axios
      .post("/productions", { production: rest })
      .then((res) => {
        console.log(res);
        getProductions(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let onChange = (e) => {
    // console.log(e.currentTarget);
    let { name, value } = e.currentTarget;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));

    if (name === "production_qty") {
      axios
        .get(`/manufacturing/ready_product/${id}`)
        .then((res) => {
          let { manufacturing_raw_qty: manufacturing_data } = res.data;
          console.log(manufacturing_data);  
          let required_data = [];
          let total_production_cost = 0;
          manufacturing_data.forEach((data) => {
            let raw_material_per_total_qty =
              data.raw_material_per_unit_qty * value;
            let raw_material_per_total_rate = raw_material_per_total_qty * data.raw_material_per_unit_rate;
              let _data = {
                ['product_name']:data.product_name,
                [`raw_material_per_unit_qty`]:data.raw_material_per_unit_qty,
                [`raw_material_per_total_qty`]:raw_material_per_total_qty,
                [`raw_material_per_total_rate`]:raw_material_per_total_rate,
                [`raw_material_per_unit_rate`]:data.raw_material_per_unit_rate,
              };
          total_production_cost+=raw_material_per_total_rate; 
          console.log(total_production_cost);
          required_data.push(_data);
          });
          
       
          setTableData((state)=>([
            ...required_data
          ]))
          setFormData((state)=>({
            ...state,
            ['total_production_cost']:total_production_cost
          }))
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getCategories();
    getSubCategories();
    
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-footer">
        <Production_form
          setFormData={setFormData}
          onChange={onChange}
          formData={formData}
          handleSubmit={handleSubmit}
          category={categories}
          sub_category={sub_categories}
          setSub_Category={setSub_Categories}
          selectedItemId={selectedItemId}
          tableData={tableData}
        />
        <ProductionTable tableData={production_table2Data} />
      </div>
    </>
  );
};

export default Production_info;
