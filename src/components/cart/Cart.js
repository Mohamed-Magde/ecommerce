import React, { Component } from 'react'
import { ProductConsumer } from '../../context';

import CartList from './CartList';
export default class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {
            value => {
              const { cart } = value;
              if ( cart.length > 0 ) {
                return (
                  <div className="cart">
                    <div className="container">
                      <h1 className="heading-1">Your Cart</h1>
                      <CartList value={ value } />
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="container cart">
                    <h1 className="heading-1">this cart is Empty</h1>

                  </div>
                )
              }
            }
          }
        </ProductConsumer>
      </div>
    )
  }
}
