/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Review = ({product,handleRemoveCart}) => {
    
    const {id,name,img,price,quantity }= product;
    return (
        <div className='review-item'>
         <img src={img} alt="" /> 
         <div className='review-details'>
            <p className='product-title'>{name}</p>
            <p>Price: <span className='orange-font'>${price}</span></p>
            <p> Order quantity: <span className='orange-font'>${quantity}</span></p>
         </div>
         <button className='btn-delete' onClick={()=>handleRemoveCart(id)}>
         <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />

         </button>
       </div>
    );
};

export default Review;