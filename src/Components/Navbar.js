import React from "react";
import Logo from "../Assets/logo.webp";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" style={{ width: '150px' }}/>
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#why">Why</a>
        <a href="#pricing">Pricing</a>
      </div>
    </nav>
  );
};

export default Navbar;
