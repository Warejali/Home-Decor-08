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
        const isAdd = cart.find((item) => item.id === product.id);
        if (!isAdd) {
            const newCart = [...cart, product];
            setCart(newCart)
        }
        else{
            alert ("You have already added this product")
        }
     } 
    const removeCart =() => {
        setCart([])
     } 
    const selectOne =(clearCart) => {
        if (clearCart.length) {
            const len = clearCart.length;
            const randomNumber =  Math.floor(Math.random() * len); 
            const randomProduct = clearCart[randomNumber];
            setCart([randomProduct]);
        }
        else{
            alert ("Please add at least 1 product")
        }
     } 
 
    return (
        <div className="container-fluid mt-3">
            <div className="row mx-auto d-flex">
            <div className='col-sm-9'>
            <h5 className='py-3 text-uppercase'>Choose 4 Gadgets for decorating Your home.</h5>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        products.map(product=> <Product key={product.id} product ={product} addToCart ={addToCart}></Product>)
                    }
                </div>
            </div>    
            <div className='col-sm-3 cart-section'>
                <Cart key={cart.id} cart ={cart} removeCart={removeCart} selectOne={selectOne}></Cart>
            </div>
        </div>
        </div>
    );
};
export default Shop;