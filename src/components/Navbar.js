import React from "react";
import Logo from "../assets/hamburgerlogo.png";
import { Link } from "react-router-dom";

console.log("hello");
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
      </div>

      <div className="rightSide">
        <Link to="/">HOME</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Navbar;
