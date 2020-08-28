import React from 'react'
import Navbar from '../../Navbar/Navbar'
import ProductionTable from './Production_table'
import Production_form from './Production_form'

const Production_info =()=> {
    return (
        <>
       <Navbar />
        <div className="main-footer">
          <Production_form />
          <ProductionTable /> 
        </div>
        </>
    )
}

export default Production_info
