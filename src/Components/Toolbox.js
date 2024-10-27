import React from "react";
import BannerBackground from "../Assets/hero-bg.svg";
import img1 from "../Assets/toolimg/img-1.jpg";
import img2 from "../Assets/toolimg/img-2.jpg";
import img3 from "../Assets/toolimg/img-3.jpg";
import img4 from "../Assets/toolimg/img-4.jpg";
import downloadicon from "../Assets/toolimg/download icon.svg";
import editicon from "../Assets/toolimg/edit-icon.svg";
import Navbar from "./Navbar";
import "../Assets/js/script"

const Toolbox = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container-toolbox">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="toolbox-container">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-6-tool">
              <div className="hero-content">
                <section className="image-generator">
                    <div className="grt-content">
                        <h2>Convert your text into an image within a second using the AI</h2>
                        <form action="#" className="generate-form">
                            <input type="text" className="prompt-input" placeholder="Your prompt here" required />
                            <div className="controls">
                                <select className="img-quantity">
                                    <option value="1">1 image</option>
                                    <option value="2">2 images</option>
                                    <option value="3">3 images</option>
                                    <option value="4" selected>4 images</option>
                                </select>
                                <button href="#imaginedcard" type="submit" className="generate-btn main-btn btn-hover">generate</button>
                            </div>
                        </form>
                    </div>
                </section>                
              </div>
            </div>
              <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
            
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="image-gallery">
        <div className="img-card">
            <img src={img1} alt=""/>
            <a href="#" className="edit-btn">
                <img src={editicon} alt="edit icon"/>
            </a>

            <a href="#" className="download-btn">
                <img src={downloadicon} alt="download icon"/>
            </a>
        </div>
        <div className="img-card">
            <img src={img2} alt=""/>

            <a href="#" className="edit-btn">
                <img src={editicon} alt="edit icon"/>
            </a>

            <a href="#" className="download-btn">
                <img src={downloadicon} alt="download icon"/>
            </a>
        </div>
        <div className="img-card">
            <img src={img3} alt=""/>
            
            <a href="#" className="edit-btn">
                <img src={editicon} alt="edit icon"/>
            </a>

            <a href="#" className="download-btn">
                <img src={downloadicon} alt="download icon"/>
            </a>
        </div>
        <div className="img-card">
            <img src={img4} alt=""/>

            <a href="#" className="edit-btn">
                <img src={editicon} alt="edit icon"/>
            </a>
            
            <a href="#" className="download-btn">
                <img src={downloadicon} alt="download icon"/>
            </a>
        </div>
    </section>
    </div>
  );
};

export default Toolbox;
