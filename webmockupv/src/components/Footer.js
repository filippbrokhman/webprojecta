import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            <p>address: 123 address road</p>
            <p>phone: 123-123-1234</p>
            <p>e-mail: johndoe@email.com</p>
            <p>serving the following areas: area1, area2, area3, area4</p>
        </footer>
    )
}

export default Footer