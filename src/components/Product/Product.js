import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, img} = props.product
    return (
        
            <div className="col">
                <div className="card h-100 product-info">
                    <img src={img} alt="" className="card-img-top"/>
                    <div class="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5>Price: ${price}</h5>
                    </div>
                    <div className="card-footer btn-add-cart">
                        <button onClick={()=>props.addToCart(props.product)} className='btn'>Add To cart</button>
                    </div>
                </div>
            </div>
    );
};

export default Product;