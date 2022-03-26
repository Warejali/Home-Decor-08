import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    return (
        <div className='order-summary '>
            <h3 className='py-3'>Selected Items</h3>

            {
                cart.map((item) => (
          
                    <div className='d-flex align-items-center justify-content-around mt-3'>
                        <img src={item.img} alt="" />
                        <p>{item.name}</p>
                    </div>
            ))}
            <button className='btn btn-outline-secondary my-3'>CHOOSE FOR 1</button>
            <button onClick={()=>props.removeCart(props.product)} className='btn btn-outline-secondary'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;