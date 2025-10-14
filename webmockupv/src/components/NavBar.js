import React from "react";
import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar=()=> {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <h1 className="logo">
                    LogoHere
                </h1>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/ContactUs">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;