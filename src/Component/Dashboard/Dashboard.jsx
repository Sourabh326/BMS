import React from "react";
import DashboardComponent from "./DashboardComponent";
import VendorEntry from "../components/Vendor/VendorEntry";
import Raw_material from "../components/RawMaterialStock/Raw_material";
import Ready_material_stock from "../components/ReadyMaterial/Ready_material_stock";
import Purchase_info from "../components/Purchase/Purchase_info";
import Product_category from "../components/ReadyMaterial/Product_category";
import Product_sub_category from "../components/ReadyMaterial/Product_sub_category";
import Production_info from "../components/Production/Production_info";
import Login from "../../Login/Login";
import Employee from "../components/Employee/Employee";
import Customers from "../components/Customers/Customers";
import Expense from "../components/Expense/Expense";
import Transportation from "../components/Transportation/Transportation";
import Sales_transportation from "../components/Transportation/Sales_transportation";
import Transportation_category from "../components/Transportation/Transportation_category";
import Sales from "../components/Sales/Sales";
import Calculator from "../components/Calculator/Calculator";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectToken } from "../../Store/user";

const Dashboard = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={DashboardComponent} />
        <Route exact path="/vendor_entry" component={VendorEntry} />
        <Route exact path="/raw_material_add" component={Raw_material} />
        <Route
          exact
          path="/ready_material_stock"
          component={Ready_material_stock}
        />
        <Route exact path="/purchase_info" component={Purchase_info} />
        
        <Route exact path="/product_category" component={Product_category} />
        <Route exact path="/production_info" component={Production_info} />
        <Route
          exact
          path="/product_sub_category"
          component={Product_sub_category}
        />
        <Route exact path="/employee" component={Employee} />
        <Route exact path="/customers" component={Customers} />
        <Route exact path="/expense" component={Expense} />
        <Route
          exact
          path="/purchase_transportation"
          component={Transportation}
        />
        <Route
          exact
          path="/sales_transportation"
          component={Sales_transportation}
        />
        <Route
          exact
          path="/transportation_category"
          component={Transportation_category}
        />
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/calculator" component={Calculator} />
      </Switch>
    </>
  );
};
const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn && token ? (
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
