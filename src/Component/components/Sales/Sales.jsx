import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Common from './Common'

const Sales =(props)=> {
    return (
       <>
        <Navbar />
        <div className="main-footer">
        <Common
        title="Sales Category"
        label="Categoty"
        />


        <Common
        title="Sales Sub Category"
        label="Sub Categoty"
        />
        </div>
       </>
    )
}

export default Sales
