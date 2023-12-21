/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = (props) => {

const cart = props.cart;
    let total =0;
    let totalShipping =0;

    for(const cartTotal of cart){
      total = total +cartTotal.price;
      totalShipping = total +cartTotal.shipping;
    }
   const tax = total*7/100;
   const grandTotal = total + totalShipping + tax;

    return (
        <div className=''>
             <h3>order summary</h3>
                <div className='order-info'>
                <p>selected items:{cart.length}</p>
                <p>Total price:${total}</p>
                <p>Total shipping charge:${totalShipping}</p>
                <p>Tax:${tax.toFixed(2)}</p>
                <h6>Grand total:{grandTotal.toFixed(2)}</h6>
                </div>
        </div>
    );
};

export default Cart;