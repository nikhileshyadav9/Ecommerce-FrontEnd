// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h1>Vintage Fashions</h1>
                </div>
                <div className="footer-links">
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/press">Press</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Help</h4>
                        <ul>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/returns">Returns</a></li>
                            <li><a href="/shipping">Shipping</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Vintage Fashions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
