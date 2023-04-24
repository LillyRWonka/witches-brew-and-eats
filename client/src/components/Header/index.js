import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Assets/Logo.png'
import './index.css';
import Auth from '../../utils/auth';


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
          <img src={logo} alt="Logo" className='logo' />
             <h1 className="m-0">Witches Brew and Eats</h1>             
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
             <input type="text" placeholder="Search.."/>
              <Link className="btn btn-lg m-2 text-dark" to="/login">
                Login
              </Link> 
              <Link className="btn btn-lg  m-2" to="/register">
                Register
              </Link>
              <Link className="btn btn-lg  m-2" to="/cart">
                <i class="fas fa-shopping-cart"/>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
   
  );
};

export default Header;
