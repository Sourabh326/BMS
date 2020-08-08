import React from 'react';
import DashboardComponent from './DashboardComponent';
import  VendorEntry from '../components/Vendor/VendorEntry';
import Raw_material from '../components/RawMaterialStock/Raw_material'
import Ready_material_stock from '../components/ReadyMaterial/Ready_material_stock'
import Purchase_info from '../components/Purchase/Purchase_info'
import Purchase_product_info from '../components/Purchase/Purchase_product_info'
import Product_category from '../components/ReadyMaterial/Product_category'
import Production_info from '../components/Production/Production_info'
import Login from '../../Login/Login'
import Employee from '../components/Employee/Employee'
import Customers from '../components/Customers/Customers'
import Expense from '../components/Expense/Expense'
import Transportation from '../components/Transportation/Transportation'
import Sales_transportation from '../components/Transportation/Sales_transportation'
import Transportation_category from '../components/Transportation/Transportation_category'


import { Switch, Route } from 'react-router-dom';

const Dashboard = () => {
    return(
        <>
       
         <Switch>
           <Route exact path="/" component={Login} />
           <Route exact path="/dashboard" component={DashboardComponent} />
           <Route exact path="/vendor_entry" component={VendorEntry} />
           <Route exact path="/raw_material_add" component={Raw_material} />
           <Route exact path="/ready_material_stock" component={Ready_material_stock} />
           <Route exact path="/purchase_info" component={Purchase_info} />
           <Route exact path="/purchase_product_info" component={Purchase_product_info} />
           <Route exact path="/product_category" component={Product_category} />
           <Route exact path="/production_info" component={Production_info} />
           <Route exact path="/employee" component={Employee} />
           <Route exact path="/customers" component={Customers} />
           <Route exact path="/expense" component={Expense} />
           <Route exact path="/purchase_transportation" component={Transportation} />
           <Route exact path="/sales_transportation" component={Sales_transportation} />
           <Route exact path="/transportation_category" component={Transportation_category} />
           
         </Switch>
        </>
    )
}
export default Dashboard;