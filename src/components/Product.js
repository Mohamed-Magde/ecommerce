import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { ProductConsumer } from "../context"

export default class Product extends Component {

  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <ProductConsumer>
        { value => {
          return (
            <figure onClick={ () => value.handleDetail( id ) }>
              <img src={ img } alt="" />
              <figcaption>
                <p class="name">{ title }</p>
                <p class="price">{ price }</p>
                <button href="" class="add-cart"
                  disabled={ inCart ? true : false }
                  onClick={ () => {
                    value.addToCart( id )
                    value.openModal( id )
                  } }>

                  {
                    inCart ? ( <p>in Cart</p> ) : ( <i class="fas fa-shopping-cart">
                    </i> )
                  }
                </button>
              </figcaption>
            </figure>
          )
        } }
      </ProductConsumer>
    )
  }
}
