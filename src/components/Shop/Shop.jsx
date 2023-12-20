/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const[products, setProduct]=useState([])

     useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
     },[])

    return (
        <div className='container'>
            <div className='product-container'>

              {
                products.map(product=>
                <Product product={product} key={product.id}>
                         
                </Product>)
              }

            </div>
            <div className='order-container'>
                <h3>order summary</h3>

            </div>
        </div>
    );
};

export default Shop;