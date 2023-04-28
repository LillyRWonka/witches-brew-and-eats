import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Assets/WBELogo.png";
import "./index.css";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-dark" to="/">
            <img src={logo} alt="Logo" className="logo" />
            <h2 className="m-0 animate__animated animate__zoomIn">
              Witches Brew and Eats
            </h2>
          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <input
                className="search-box"
                type="text"
                placeholder="Search..."
              />
              <Link
                className="btn btn-lg m-2 text-dark animate__animated animate__rotateIn"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn btn-lg  m-2 animate__animated animate__rotateIn"
                to="/register"
              >
                Register
              </Link>
              <Link
                className="btn btn-lg  m-2 animate__animated animate__bounce"
                to="/cart"
              >
                <div class="icon">
                  <i class="fa fa-shopping-basket" />
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
