import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;


    return (
      <div className="cart-grid-block">
        <figure>
          <img src={ img } alt="" />
        </figure>
        <div className="cart-grid-block-item">
          <p className="name">Product : </p> <span>{ title }</span>
        </div>

        <div className="cart-grid-block-item">
          <p className="name">Price : </p> <span>{ price }</span>
        </div>

        <div className="cart-grid-block-item check-box">
          <i class="fas fa-plus" onClick={ () => {
            return increment( id )
          } }></i>
          <p>{ count }</p>
          <i class="fas fa-minus" onClick={
            () => {
              return decrement( id )
            }
          }></i>

        </div>

        <div className="cart-grid-block-item">
          <i class="fas fa-trash"></i>
        </div>
        <div className="cart-grid-block-item">
          <p>item total <span>${ total }</span></p>
        </div>
      </div>
    )
  }
}
