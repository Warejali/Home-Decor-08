import React from 'react';
import CartText from '../CartText/CartText';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    return (
        <div className='order-summary '>
            <h3 className='py-3'>Selected Items</h3>

            {
                cart.map(item => <CartText item ={item}></CartText>)
            }
            <button className='btn btn-outline-secondary my-3'>CHOOSE FOR 1</button>
            <button onClick={()=>props.removeCart(props.product)} className='btn btn-outline-secondary'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;