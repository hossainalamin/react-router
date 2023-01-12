import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/friends'>Friends</Link>
            </nav>
            <h4>Common Header</h4>
        </div>
    );
};

export default Header;