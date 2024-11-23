import React from "react";
import BannerImage from "../assets/1beef.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Siz değerli müşterimiz için Temiz ve hijyenik ortamlarda
          hazırladığımız Menülerimizle hizmetinizdeyiz.
        </p>
      </div>
    </div>
  );
};

export default About;
