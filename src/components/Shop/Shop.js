import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])  

    const addToCart =(product) => {
        const newCart = [...cart, product];
        setCart(newCart)
     } 
 
    return (
        <div className="container mt-3">
            <div className="row mx-auto d-flex">
            <div className='col-9'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        products.map(product=> <Product product ={product} addToCart ={addToCart}></Product>)
                    }
                </div>
            </div>    
            <div className='col-3 cart-section'>
            <Cart cart ={cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;