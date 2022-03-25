import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])  
 
    return (
        <div className='shop'>
            <div className='products-section'>
                {
                    products.map(product=> <Product product ={product}></Product>)
                }
            </div>
            <div className='cart-section'></div>
        </div>
    );
};

export default Shop;