import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homepage.styles.css";
import LandingPageHero from "../../assets/landing-page/landing-page-hero.png";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="hero-container">
            <div className="text-dark fs-5 hero-text-container">
                <h3 className="fw-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Vestibulum ultrices fi...
                </h3>
                <Link className="link-dark fw-bold">
                    {"Read More"}
                </Link>
            </div>

            <div className="hero-image-container">
            <div><img className="hero-image" src={LandingPageHero}/></div>

            <div className="text-dark fs-5 hero-picture-text-container">
                <h1 className="hero-picture-text">
                    <span style={{whiteSpace: "nowrap"}}>less is</span><br/>
                    <span style={{whiteSpace: "nowrap"}}>more.</span>
                </h1>
            </div>

            </div>
        </div>
    );
};

export default HomePage;
