import React, { useState } from "react";
import { Link } from "react-router-dom";
import MnmlstLogoBlack from "../../assets/logo/mnmlst-logo-black.png";
import "./navbar.styles.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleNavbarMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeNavbar = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-white">
            <div className="container-fluid">
                <Link to="/"><img style={{height: "32px"}} src={MnmlstLogoBlack} alt="mnmlst-logo-black"/></Link>
                <button onClick={() => toggleNavbarMenu()} style={{border: '0px', boxShadow: "0"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isMenuOpen ? "true" : "false"} aria-label="Toggle navigation">
                    {
                        isMenuOpen ? (
                            <i className="bi bi-x fs-1"></i>
                        ) : (
                            <span className="navbar-toggler-icon"></span>
                        )
                    }
                </button>
                <div className={`collapse navbar-collapse mx-2 ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark fs-5" onClick={closeNavbar}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link text-dark fs-5" onClick={closeNavbar}>
                                PRODUCT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/store" className="nav-link text-dark fs-5" onClick={closeNavbar}>
                                STORE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link text-dark fs-5" onClick={closeNavbar}>
                                ABOUT US
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
