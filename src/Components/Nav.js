import React from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../apiCalls';
import './Nav.css'

//imported fetchArticles to 
const Nav = () => {
    return (
        <nav className='nav-container'>
           <a href='/'>
           <h1 className='nav-title' onClick={() => {fetchArticles()}}>NYTimes Reader</h1>
           </a> 
        </nav>
    )
}

export default Nav
