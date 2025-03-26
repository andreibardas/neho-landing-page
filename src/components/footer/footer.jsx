import React from "react";
import "./footer.styles.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <footer className="container-fluid bg-transparent footer-container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex gap-3">
                    <a href="https://facebook.com" target="_blank"><i style={{fontSize: "32px"}} className="bi bi-facebook text-dark"></i></a>
                    <a href="https://instagram.com" target="_blank"><i style={{fontSize: "32px"}} className="bi bi-instagram text-dark"></i></a>
                    <a href="https://twitter.com" target="_blank"><i style={{fontSize: "32px"}} className="bi bi-twitter text-dark"></i></a>
                    <a href="https://whatsapp.com" target="_blank"><i style={{fontSize: "32px"}} className="bi bi-whatsapp text-dark"></i></a>
                </div>
                <div className="text-dark fw-bold fs-5">Arlington Heights, IL</div>
            </div>
        </footer>
    );
};

export default Footer;
