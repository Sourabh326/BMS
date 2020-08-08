import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Purchase_transportation_info from './Purchase_Transportation/Purchase_transportation_info'
import Purchase_transportation_table from './Purchase_Transportation/Purchase_transportation_table'
import EditModel from './Purchase_Transportation/Edit_modal'

const Transportation =()=> {
    return (
        <>
        <Navbar />
        <div className="main-footer">
        <Purchase_transportation_info />

        <Purchase_transportation_table />
        <EditModel />
        </div>
        </>
    )
}

export default Transportation;
