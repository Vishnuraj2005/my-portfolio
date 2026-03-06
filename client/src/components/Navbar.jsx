import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css'; // styles for navbar
import logo from './logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Vishnu Raj logo" className="logo-img" />
                    <span>Vishnu Raj</span>
                </Link>
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
