import React from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <div className="logo">Colorlib.</div>
        </div>
        <div className="navbar-right">
            <div className="nav-menu-list">
                <li>Home</li>
                <li>Suppot</li>
                <li>Free Themes</li>
                <li>Premium Themes</li>
                <li>Website Templates</li>
                <li>Blog</li>
                <li>Account</li>
                <li><FaSearch/></li>
            </div>
        </div>
    </div>
  )
}

export default Navbar