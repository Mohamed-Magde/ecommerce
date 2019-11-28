import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Defualt from "./components/Defualt";
import Details from "./components/Details";
import Modal from "./components/Modal";
import ProductList from "./components/ProductsList";
import Cart from "./components/cart/Cart";
import "./scss/main.css"

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route path="/details" component={ Details } />
          <Route path="/cart" component={ Cart } />
          <Route component={ Defualt } />
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}
