import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <NavLink to='/'className={({isActive}) => isActive ? 'active': 'undefined'} >Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
            
            <h4>Common Header</h4>
        </div>
    );
};

export default Header;