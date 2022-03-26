import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState({})
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])  
    const addToCart =(product) => {
        const newCart = [...cart, product];
        setCart(newCart)
     } 
    const removeCart =(product) => {
        const newRemoveCart = [];
        setCart(newRemoveCart)
     } 
    const selectOne =(newCart) => {
        const len = newCart.length;
        const randomNumber =  Math.floor(Math.random() * len); 
        const randomProduct = newCart[randomNumber];
        setRandom(randomProduct);
     } 
 
    return (
        <div className="container-fluid mt-3">
            <div className="row mx-auto d-flex">
            <div className='col-sm-9'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        products.map(product=> <Product key = {product.id} product ={product} addToCart ={addToCart}></Product>)
                    }
                </div>
            </div>    
            <div className='col-sm-3 cart-section'>
                <Cart cart ={cart} removeCart={removeCart} random={random} selectOne={selectOne}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;