import React from "react";

import "./index.css";
import culdron from "../../Assets/Couldron.png";
const Footer = () => {
  return (
    <footer className="w-100  bg-secondary ">
      <div className="footer-container text-center mb-2">
        <h4 className="no-margin text-bold">
          Bippity boppity boo,{" "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{" "}
          make this day funny through and through!
        </h4>
        <img
          src={culdron}
          alt="Logo"
          className="animate__animated animate__fadeIn culdron"
        />
      </div>
    </footer>
  );
};

export default Footer;
