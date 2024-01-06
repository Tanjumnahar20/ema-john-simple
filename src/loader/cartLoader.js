import { getShoppingCart } from "../utilities/fakedb";

/* eslint-disable no-unused-vars */
const cartLoader = async ()=>{
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();
    console.log(products)

    const storedCart = getShoppingCart();
    const savedCart = [];
    console.log(storedCart)
    for (const id in storedCart){
     const addedProduct = products.find( pd=> pd.id===id);
     if(addedProduct){
        const quantity = storedCart[id];
         addedProduct.quantity= quantity;
       savedCart.push(addedProduct)
     }        
    }

    return savedCart;

    

}

export default cartLoader;