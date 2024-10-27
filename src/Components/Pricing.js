import React from "react";
import Telegram from "../Assets/telegram.png";
import Launch from "../Assets/launch.png";
import Plane from "../Assets/plane.png";
const Pricing = () => {
  return (
    <section id="pricing" className="pricing-container">
    <div className="pricing-plans">
      <div className="container">
        <h2 className="pricing-h2"> Pricing Plans (Demo)</h2>
        <div className="panel pricing-table">
          <div className="pricing-plan">
            <div className="circle-background">
              <img src={Telegram} alt="" className="pricing-img" />
            </div>
            <h2 className="pricing-header">Personal</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">FREE Access</li>
              <li className="pricing-features-item">Editing Tools</li>
              <li className="pricing-features-item">One click 4 images</li>
              <li className="pricing-features-item">Fast Generation</li>
              <li className="pricing-features-item">unlimited downloads</li>
            </ul>
            <span className="pricing-price">Free</span>
            <a href="#/" className="pricing-button">Sign up</a>
          </div>
          
          <div className="pricing-plan">
            <div className="circle-background">
              <img src={Plane} alt="" className="pricing-img" />
            </div>
            <h2 className="pricing-header">Designer</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">All Free plan features</li>
              <li className="pricing-features-item">Pro Editing Tools</li>
              <li className="pricing-features-item">Scaling images</li>
              <li className="pricing-features-item">More Images Formats</li>
              <li className="pricing-features-item">Transparent Images</li>
            </ul>
            <span className="pricing-price">$150</span>
            <button className="main-btn btn-hover">Free trial</button>
          </div>
          
          <div className="pricing-plan">
            <div className="circle-background">
              <img src={Launch} alt="" className="pricing-img" />
            </div>
            <h2 className="pricing-header">Big Team</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">All Designer plan features</li>
              <li className="pricing-features-item">One click 50 images</li>
              <li className="pricing-features-item">Resize and Compress Images</li>
              <li className="pricing-features-item">CHoose images resolution</li>
            </ul>
            <span className="pricing-price">$400</span>
            <a href="#/" className="pricing-button">Free trial</a>
          </div>
          
        </div>
      </div>
    </div>
    </section>
  );
};

export default Pricing;
