import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Stay in the Creative Loop!</h1>
      <h1 className="primary-heading">Subscribe to our newsletter.</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="main-btn btn-hover">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
