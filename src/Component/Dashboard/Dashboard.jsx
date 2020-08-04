import React from 'react';
import DashboardComponent from './DashboardComponent';
import  VendorEntry from '../components/Vendor/VendorEntry';
import PaymentGiven from '../components/Vendor/PaymentGiven';
import VendorReport from '../components/Vendor/VendorReport';
import RawMaterialStock from '../components/RawMaterialStock/Raw_material_stock'
import Raw_material_add from '../components/RawMaterialStock/Raw_material_add'
import Raw_material_stock_report from '../components/RawMaterialStock/Raw_material_stock_report'
import { Switch, Route } from 'react-router-dom';
const Dashboard = () => {
    return(
        <>
         <Switch>
           <Route exact path="/" component={DashboardComponent} />
           <Route exact path="/vendor entry" component={VendorEntry} />
           <Route exact path="/payment given" component={PaymentGiven} />
           <Route exact path="/vendor report" component={VendorReport} />
           <Route exact path="/raw material stock" component={RawMaterialStock} />
           <Route exact path="/raw material add" component={Raw_material_add} />
           <Route exact path="/raw material stock report" component={Raw_material_stock_report} />

         </Switch>
        </>
    )
}
export default Dashboard;