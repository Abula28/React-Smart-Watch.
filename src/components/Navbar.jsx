import React from "react";
import logo from "../assets/imgs/amazon-logo.png";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="amazon logo" />
    </nav>
  );
};
