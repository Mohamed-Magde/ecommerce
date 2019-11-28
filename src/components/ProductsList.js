import React, { Component } from 'react'
import Product from "./Product";
import { storeProducts } from "../data"
import { ProductConsumer } from "../context"

export default class ProductsList extends Component {
  state = {
    products: storeProducts
  }
  render() {
    return (
      <section className="products">
        <div className="container">
          <h1 className="heading-1">Our <span> Products</span></h1>

          <div className="products-grid">
            <ProductConsumer>
              {
                value => {
                  return value.products.map( product => {
                    return <Product key={ product.id } product={ product } />
                  } )
                }
              }
            </ProductConsumer>
          </div>
        </div>
      </section>

    )
  }
}
