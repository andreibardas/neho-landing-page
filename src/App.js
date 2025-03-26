import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import HomePage from "./components/homepage/homepage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/footer/footer";

const Product = () => <div className="p-4" style={{minHeight: "calc(100vh - 60px)"}}><h2>Product Page</h2></div>;
const Store = () => <div className="p-4" style={{minHeight: "calc(100vh - 60px)"}}><h2>Store Page</h2></div>;
const AboutUs = () => <div className="p-4" style={{minHeight: "calc(100vh - 60px)"}}><h2>About Us Page</h2></div>;

const App = () => {
  return (
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </div>
        <div className="mx-3">
           <Footer/>
        </div>
      </Router>
  );
};

export default App;
