/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const[products, setProduct]=useState([])

     useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
     },[])

     const [cart,setCart] = useState([]);
     const handleAddToCart=(product)=>{
      const newCart = [...cart,product];
      setCart(newCart);
   }
    

    return (
        <div className='container'>
            <div className='product-container'>

              {
                products.map(product=>
                <Product 
                product={product} 
                 key={product.id}
                 handleAddToCart ={handleAddToCart}

                >
                         
                </Product>)
              }
            </div>

            <div className='order-container'>
               <Cart cart={cart}></Cart>
             </div>

        </div>
    );
};

export default Shop;