import React from "react";
import './NavBar.css';
import {Link} from 'react-router-dom';

/*
const NavBar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    LogoHere
                </a>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/AboutUs">About Us</a>
                    </li>
                    <li>
                        <a href="/Services">Services</a>
                    </li>
                    <li>
                        <a href="/Projects">Projects</a>
                    </li>
                    <li>
                        <a href="/ContactUs">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
*/

const NavBar=()=> {
    return (
        <div className="navBar">
            <div className="Home">
                <Link to="/Home">Home</Link>
            </div>
        </div>
    )
}

export default NavBar;