import React from 'react';

const CartText = (props) => {

    return (
        <div className='d-flex justify-content-start mt-2'>
            <div className='me-3'>
                <img src={props.item.img} alt="" />
            </div>
            <p>{props.item.name}</p>
        </div>
    );
};

export default CartText;