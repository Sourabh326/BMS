import React from 'react';
import DashboardComponent from './DashboardComponent';
import  VendorEntry from '../components/Vendor/VendorEntry';
import PaymentGiven from '../components/Vendor/PaymentGiven';
import VendorReport from '../components/Vendor/VendorReport';
import RawMaterialStock from '../components/RawMaterialStock/Raw_material_stock'
import Raw_material_add from '../components/RawMaterialStock/Raw_material_add'
import Ready_material_stock from '../components/ReadyMaterial/Ready_material_stock'
import Purchase_info from '../components/Purchase/Purchase_info'
import Purchase_product_info from '../components/Purchase/Purchase_product_info'
import Production_info from '../components/Production/Production_info'
import Login from '../../Login/Login'
import Employee from '../components/Employee/Employee'
import Customers from '../components/Customers/Customers'
import { Switch, Route } from 'react-router-dom';
const Dashboard = () => {
    return(
        <>
       
         <Switch>
           <Route exact path="/" component={Login} />
           <Route exact path="/dashboard" component={DashboardComponent} />
           <Route exact path="/vendor entry" component={VendorEntry} />
           <Route exact path="/payment given" component={PaymentGiven} />
           <Route exact path="/vendor report" component={VendorReport} />
           <Route exact path="/raw material stock" component={RawMaterialStock} />
           <Route exact path="/raw material add" component={Raw_material_add} />
           <Route exact path="/ready material stock" component={Ready_material_stock} />
           <Route exact path="/purchase info" component={Purchase_info} />
           <Route exact path="/purchase product info" component={Purchase_product_info} />
           <Route exact path="/production info" component={Production_info} />
           <Route exact path="/employee" component={Employee} />
           <Route exact path="/customers" component={Customers} />
         </Switch>
        </>
    )
}
export default Dashboard;