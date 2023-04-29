import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import culdron from "../../Assets/Couldron.png";
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100  bg-secondary ">
      <div className="footer-container text-center mb-2">
        {location.pathname !== "/" && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
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
