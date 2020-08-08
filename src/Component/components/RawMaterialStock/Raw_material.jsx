import React from 'react'
import Raw_material_add from './Raw_material_add'
import Raw_material_stock from './Raw_material_stock'
import Navbar from '../../Navbar/Navbar'
import EditModel from './EditModel'

const Raw_material =()=> {
    return (
        
       <>
       <Navbar />
       {/* Raw Material Form */}
        <Raw_material_add />

        {/* Raw matrerial Table */}
        <Raw_material_stock />

        {/* Edit Model */}
        <EditModel />
       </>
    )
}

export default Raw_material;
