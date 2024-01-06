/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
  const handleDeleteCart = props.handleDeleteCart;

const cart = props.cart;
    let total =0;
    let totalShipping =0;
    let quantity =0;

    for(const cartTotal of cart){
      if(cartTotal.quantity===0){
        cartTotal.quantity=1;
      }
      total = total +cartTotal.price;
      totalShipping = totalShipping +cartTotal.shipping;
      quantity = quantity + cartTotal.quantity
    }
   const tax = total*7/100;
   const grandTotal = total + totalShipping + tax;

    return (
        <div className=''>
             <h3>order summary</h3>
                <div className='order-info'>
                <p>selected items:{quantity}</p>
                <p>Total price:${total}</p>
                <p>Total shipping charge:${totalShipping}</p>
                <p>Tax:${tax.toFixed(2)}</p>
                <h6>Grand total:{grandTotal.toFixed(2)}</h6>
                </div>
                <button className='btn-delete-cart'>Clear cart
                  <span onClick={handleDeleteCart}> <FontAwesomeIcon  icon={faTrashAlt} /></span>
                </button>
        </div>
    );
};

export default Cart;