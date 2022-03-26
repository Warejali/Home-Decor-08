import React from 'react';
import './Cart.css'

const Cart = ({cart, selectOne, removeCart}) => {
   

    return (
        <div className='order-summary '>
            <h3 className='py-3'>Selected Items</h3>

            {
                cart && cart.map(item => (
                    <div className='d-flex justify-content-start mt-2'>
                        <div className='me-3'>
                            <img src={item.img} alt="" />
                        </div>
                        <p>{item.name}</p>
                    </div>))
            }
            <button onClick={()=>selectOne(cart)} className='btn btn-outline-secondary my-3'>CHOOSE FOR 1</button>

            <button onClick={()=>removeCart(cart.product)} className='btn btn-outline-secondary'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;