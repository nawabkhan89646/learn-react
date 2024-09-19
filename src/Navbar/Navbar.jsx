import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <h1>pl<span><i className="fa-solid fa-circle-play"></i></span>y</h1>
        <ul className="heading">
            <li>Home</li>
            <li>Trending</li>
            <li>Collections</li>
            <li>Categories</li>
            <li>Contact</li>
        </ul>
        <div className="right">
            Sign Up
        </div>
    </div>
  );
}

export default Navbar;
