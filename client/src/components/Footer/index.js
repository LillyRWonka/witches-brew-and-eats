import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import culdron from '../../Assets/Couldron.png'
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 ">
      <div className="container text-center mb-2">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>       
        Bippity boppity boo,{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          make this day funny through and through!
          <img src={culdron} alt="Logo" className='animate__animated animate__fadeIn culdron' />
        </h4>
       
      </div>
    </footer>
  );
};

export default Footer;
