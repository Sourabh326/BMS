import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Sales_transportation_info from './Sales_Transportation/Sales_transportation_info'
import Sales_transportation_table from './Sales_Transportation/Sales_transportation_table'
import EditModel from './Sales_Transportation/Edit_modal'

const Sales_transportation =()=> {
    return (
        <>
        <Navbar />
        <div className="main-footer">
        <Sales_transportation_info />

        <Sales_transportation_table />
        <EditModel />
        </div>
        </>
    )
}

export default Sales_transportation;