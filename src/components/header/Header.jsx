import React from "react";
import { logo } from "../../assets";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <header className="header1">
        <div className="container">
          <div className="hider">
            <div className="ong">
              <img src={logo} alt="" />

              <a href="#" className="menu">
                Home
              </a>
              <a href="#" className="menu">
                About
              </a>
              <a href="#" className="menu">
                Services
              </a>
              <a href="#" className="menu">
                Articles
              </a>
              <a href="#" className="menu">
                Contact
              </a>
            </div>
            <div className="chap">
              <a href="#" className="menu">
                Cart (0)
              </a>
              <a href="#" className="btn">
                Get a free quote
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
