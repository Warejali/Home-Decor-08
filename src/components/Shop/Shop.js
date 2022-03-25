import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        <div className="row">
            <div className='col-8'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        products.map(product=> <Product product ={product}></Product>)
                    }
                </div>
            </div>    
            <div className='cart-section'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;