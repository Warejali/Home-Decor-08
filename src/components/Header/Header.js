import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='container-fluid header-nav'>
            <div className="header-nav container d-flex justify-content-between align-items-center">
                <div className='logo align-items-center d-flex'>
                    <h2>Home Decoration</h2>   
                </div>
                <div className='header-menu'>
                    <a href="/order">Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/manage-inventory">Manage Inventory</a>   
                </div>
            </div>
        </nav>
    );
};

export default Header;