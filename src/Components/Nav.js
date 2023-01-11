import React from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../apiCalls';
import './Nav.css'

//imported fetchArticles to update state when returning home, in the callback function

const Nav = () => {
    return (
        <nav className='nav-container'>
           <a href='/'>
           <h1 className='nav-title' onClick={() => {fetchArticles()}}>NYTimes Top Stories</h1>
           </a> 
        </nav>
    )
}

export default Nav
