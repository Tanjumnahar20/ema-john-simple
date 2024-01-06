/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';

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
      // set item to local storage:
      addToDb(product.id);
   }
    // get full product from local storage:
    useEffect(()=>{
      console.log(products)
      const storedCart = getShoppingCart();
      const savedCart =[];

      // step:1 get id
      for (const id in storedCart){
        // console.log(id)

      // step:2get product from id
      const addedProduct = products.find(pd=>pd.id===id)

      // step :3 get product quantity
      if(addedProduct){
        const quantity =storedCart[id];
       addedProduct.quantity =quantity
      // console.log(addedProduct);
      // step:4 save the product from added cart
      savedCart.push(addedProduct);
      console.log(addedProduct)
  }
  //  step:set cart
    setCart(savedCart)
      }

    },[products])

    // handle delete cart
    const handleDeleteCart=()=>{
      setCart([])
      deleteShoppingCart()
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
               <Cart
               
               cart={cart}
               handleDeleteCart={handleDeleteCart}
               ></Cart>
             </div>

        </div>
    );
};

export default Shop;