import React from 'react'
import Navbar from '../../Navbar/Navbar';
import ExpenseForm,{ExpenseTable} from './Common';
import EditModel from './EditModel'

const Expense =()=> {

    
    return (
        <>
        <Navbar />
        <div className="main-footer">
            <ExpenseForm />
            <ExpenseTable />
            <EditModel />
        </div>
        </>
    )
}

export default Expense;
