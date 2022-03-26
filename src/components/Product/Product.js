import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import './Product.css'

const Product = (props) => {
    const {name, price, img, id} = props.product
    return (
        
            <div className="col">
                <div className="card h-100 product-info">
                    <img src={img} alt="" className="card-img-top"/>
                    <div className ="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6>ID: {id}</h6>
                        <h5>Price: ${price}</h5>
                    </div>
                    <div className="card-footer btn-add-cart">
                        <button onClick={()=>props.addToCart(props.product)} className='btn'>Add To cart <BsFillCartPlusFill/></button>
                    </div>
                </div>
            </div>
    );
};

export default Product;