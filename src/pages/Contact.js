import React from "react";
import BannerImage from "../assets/2blackbean.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter Full Name..." type="text" />

          <label htmlFor="email">E-mail</label>
          <input name="email" placeholder="Enter your e-mail..." type="email" />

          <label htmlFor="message">Full Name</label>
          <textarea
            name="message"
            placeholder="Enter Your Message..."
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
