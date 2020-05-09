import React from "react";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Products from "./views/Products";
import NotFound from "./views/NotFound";
import ProductDetails from "./views/ProductDetails";
import SignIn from "./views/SignIn";
import Register from "./views/Register";
import ActiveOrders from "./views/ActiveOrders";
import History from "./views/History";
import CheckOut from "./views/CheckOut";
import AdminOrders from "./views/AdminOrders.js";
import AdminUsers from "./views/AdminUsers.js";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/products" exact component={Products} />
        <Route path="/product/details/:id" component={ProductDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/activeOrders" component={ActiveOrders} />
        <Route path="/historicOrders" component={History} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="/adminorders" component={AdminOrders} />
        <Route path="/adminusers" component={AdminUsers} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
