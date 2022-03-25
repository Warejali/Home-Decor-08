import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-nav'>
            <div className='header-logo'>
                <h2>Home Decoration</h2>   
            </div>
            <div className='header-menu'>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>   
            </div>
        </nav>
    );
};

export default Header;