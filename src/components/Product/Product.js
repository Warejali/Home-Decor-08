import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, img} = props.product
    return (
        <div className='product-item'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
            </div>
                <button onClick={()=>props.addToCart(props.product)} className='btn-add-cart'>Add To cart</button>
        </div>
    );
};

export default Product;