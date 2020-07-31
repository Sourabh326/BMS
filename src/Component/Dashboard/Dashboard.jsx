import React from 'react';
import DashboardComponent from './components/DashboardComponent';
import  VendorEntry from './components/Vendor/VendorEntry';
import PaymentGiven from './components/Vendor/PaymentGiven';
import VendorReport from './components/Vendor/VendorReport';
import { Switch, Route } from 'react-router-dom';
const Dashboard = () => {
    return(
        <>
         <Switch>
           <Route exact path="/" component={DashboardComponent} />
           <Route exact path="/vendor entry" component={VendorEntry} />
           <Route exact path="/payment given" component={PaymentGiven} />
           <Route exact path="/vendor report" component={VendorReport} />
         </Switch>
        </>
    )
}
export default Dashboard;