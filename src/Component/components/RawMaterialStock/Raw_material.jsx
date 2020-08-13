import React from 'react'
import Raw_material_add from './Raw_material_add'
import Raw_material_stock from './Raw_material_stock'
import Navbar from '../../Navbar/Navbar'
import EditModel from './EditModel'
import $ from 'jquery'
import axios from 'axios'
import { useEffect } from 'react'
const Raw_material =()=> {
    const [raw_material_stocks,setRaw_material_stock] = React.useState([]);
    const getRawStocks = ()=>{
        axios.get('/raw_stocks').then((res)=>{
            const {raw_materials} = res.data;
            setRaw_material_stock(raw_materials);
        })
    }
    useEffect(()=>{
        getRawStocks();
    },[])
    return (
       <>
       <Navbar />
       {/* Raw Material Form */}
        <Raw_material_add cb={getRawStocks} />
        {/* Raw matrerial Table */}
        <Raw_material_stock tableData={raw_material_stocks} cb={getRawStocks} />
        {/* Edit Model */}
        <EditModel cb={getRawStocks}/>
       </>
    )
}

export default Raw_material;
