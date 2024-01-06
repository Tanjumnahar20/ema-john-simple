/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../ReviewItem/Review';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] =useState(savedCart);

     const handleRemoveCart =(id)=>{
         const remaining= cart.filter(product => product.id !==id)
         setCart(remaining)
         removeFromDb(id)
     }

    return (
       <div className='container'>
         <div className='review-container'>
            {
                cart.map(product=><Review
                key={product.id}
                product={product}
                handleRemoveCart={handleRemoveCart}
                ></Review>)
            }
        </div>

        <div className='order-container'>
        <Cart cart={cart}></Cart>
       </div>
       </div>
    );
};

export default Order;