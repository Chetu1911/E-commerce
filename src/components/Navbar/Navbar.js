import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <div  className="navbar">
      <div className="navbar-logo">
        T-shirt Printing Site
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-icons">
        <span className="icon-heart">&#9829;</span>
        <span className="icon-cart">&#128717;</span>
      </div>
      </div>
      <nav className='second-nav'>
      <div className="navbar-links">
       
        <Link className='a' to="/">Home</Link>
        <Link className='a' to="/About us">About</Link>
        <Link className='a' to="/Category">Category</Link>
        <Link className='a' to="/Service">Service</Link>
        <Link className='a' to="/login">Login/Register</Link>
      </div>
      </nav>
    </nav>
  );
}

export default Navbar;
