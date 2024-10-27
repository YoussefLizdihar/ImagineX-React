import React from "react";
import BannerBackground from "../Assets/hero-bg.svg";
import BannerImage from "../Assets/hero-img.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Next Favourite Ai Image Generator
          </h1>
          <p className="primary-text">
          Discover endless creative possibilities with ImagineX!
          Effortlessly transform your ideas into stunning visuals with advanced AI technology.
          </p>
          <a href="/tool"><button className="main-btn border-btn primary-button btn-hover wow fadeInUp">Try Now</button></a>
          <a href="#features" className="scroll-bottom">
                <svg width="20" height="20" viewBox="0 0 25 25" fill="#5864ff" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                  <path d="M11.7547 20.9888C11.8923 21.1495 12.0966 21.2514 12.3247 21.2514L12.3264 21.2514C12.5188 21.2518 12.7113 21.1786 12.8581 21.0319L18.8583 15.0359C19.1513 14.7431 19.1514 14.2682 18.8586 13.9752C18.5659 13.6822 18.091 13.6821 17.798 13.9749L13.0747 18.6948L13.0747 4.5C13.0747 4.08579 12.7389 3.75 12.3247 3.75C11.9105 3.75 11.5747 4.08579 11.5747 4.5L11.5747 18.6883L6.85829 13.9749C6.5653 13.6821 6.09043 13.6822 5.79763 13.9752C5.50483 14.2682 5.50498 14.7431 5.79796 15.0359L11.7547 20.9888Z" fill="#5864ff"/>
                  </svg>
                    
              </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" style={{ maxWidth: '130%' }}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
