import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='font-serif sm:flex gap-5 m-6'>
            <Link to='/' >Home</Link>
            <Link to='/order' >Order Review</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact Us</Link>
            <Link to='/login' >Login</Link>
        </nav>
    );
};

export default Header;