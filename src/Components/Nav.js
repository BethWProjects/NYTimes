import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav-container'>
           <Link to='/'>
           <h1 className='nav-title'>NYTimes Reader</h1>
           </Link> 
           
        </nav>
    )
}

export default Nav
