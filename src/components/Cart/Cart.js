import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let image
    let name 
    for(const product of cart){
         image = product.img
         name = product.name
    }

    return (
        <div className='order-summary '>
            <h2>Order Summery</h2>
            <div className='d-flex align-items-center justify-content-between'>
                <img src={image} alt="" />
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Cart;