import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <div className="container-block">
            <i className="fab fa-phoenix-squadron"></i>
            <Link className="link-item" to="/">
              <p className="logo">Products</p>
            </Link>
          </div>
          <Link to="/cart" className="cart"
          >
            <i className="fas fa-shopping-cart"></i>My Cart
            </Link>
        </div>
      </nav>
    )
  }
}

