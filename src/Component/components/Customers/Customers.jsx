import React from 'react'
import Navbar from '../../Navbar/Navbar';
import CustomerForm,{CustomerTable} from './Common';
import EditModel from './EditModel'

const Customers =()=> {

    
    return (
        <>
        <Navbar />
        <div className="main-footer">
            <CustomerForm />
            <CustomerTable />
            <EditModel />
        </div>
        </>
    )
}

export default Customers;
