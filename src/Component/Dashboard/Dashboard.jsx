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
import Sales from '../components/Sales/Sales'
import Calculator from '../components/Calculator/Calculator'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from "../../Store/user/userSlice";

const Dashboard = () => {
    return(
        <>
       
         <Switch>
           <Route exact path="/" component={Login} />
           <PrivateRoute exact path="/dashboard">
             <DashboardComponent/>
           </PrivateRoute>
           <PrivateRoute exact path="/vendor_entry" component={VendorEntry} />
           <PrivateRoute exact path="/raw_material_add" component={Raw_material} />
           <PrivateRoute exact path="/ready_material_stock" component={Ready_material_stock} />
           <PrivateRoute exact path="/purchase_info" component={Purchase_info} />
           <PrivateRoute exact path="/purchase_product_info" component={Purchase_product_info} />
           <PrivateRoute exact path="/product_category" component={Product_category} />
           <PrivateRoute exact path="/production_info" component={Production_info} />
           <PrivateRoute exact path="/employee" component={Employee} />
           <PrivateRoute exact path="/customers" component={Customers} />
           <PrivateRoute exact path="/expense" component={Expense} />
           <PrivateRoute exact path="/purchase_transportation" component={Transportation} />
           <PrivateRoute exact path="/sales_transportation" component={Sales_transportation} />
           <PrivateRoute exact path="/transportation_category" component={Transportation_category} />
           <PrivateRoute exact path="/sales" component={Sales} />
           <PrivateRoute exact path="/calculator" component={Calculator} />
           
         </Switch>
        </>
    )
}

const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn && token? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};




export default Dashboard;