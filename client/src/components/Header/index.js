import React, { useState }  from "react";
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
  const [cartItems] = useState([]);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="d-flex justify-content-between pb-3 pt-3">
      <div className="d-flex align-items-center">
        <Link className="text-dark ps-5" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link className="text-dark ps-5 text-decoration" to="/">
          <h2 className="m-0 animate_animated animate_zoomIn text-bold">
            Witches Brew and Eats
          </h2>
        </Link>
      </div>
      <div className="d-flex align-items-center">
        {Auth.loggedIn() ? (
          <>
            <Link className="btn btn-lg btn-success m-2" to="/userAccount">
             <h6>Welcome to {Auth.getProfile().data.username}'s profile</h6> 
            </Link>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
            <Link
              className="btn btn-lg  m-2 animate_animated animate_bounce"
              to="/cart"
            >
              <div class="icon">
                <i class="fa fa-shopping-basket" />{totalItems} items
              </div>
            </Link>
          </>
        ) : (
          <>
            <input className="search-box" type="text" placeholder="Search..." />
            <Link
              className="btn btn-lg m-2 text-dark animate_animated animate_rotateIn "
              to="/login"
            >
              <h2 className="m-0 animate_animated animate_zoomIn text-bold">
                Login
              </h2>
            </Link>
            <Link
              className="btn btn-lg  m-2 animate_animated animate_rotateIn"
              to="/register"
            >
              <h2 className="m-0 animate_animated animate_zoomIn text-bold">
                Register
              </h2>
            </Link>
            <Link
              className="btn btn-lg  m-2 animate_animated animate_bounce"
              to="/cart"
            >
              <div className="icon">
                <i className="fa fa-shopping-basket" />{totalItems} items
              </div>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
