import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import witches from '../Assets/witches.jpg'

const menuItems = [
  { id: 1, title: 'Drinks', link: '/drinks'},
  { id: 2, title: 'Food', link: '/food' },
  { id: 3, title: 'Recipes', link: '/recipes' },
  ];
const Home = () => {

  
  return (
    <main className="container">
        <div className="menu-container">
        <h4>Products</h4>
      <ul className="menu-items">     
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.title}</Link>                              
          </li>     
           ))}                              
      </ul>  
      <img src={witches} alt="Logo"/> 
      </div> 
        <div className="flex-row justify-center">
        <div className="col-12 col-md-10 mb-3 p-3">
           <h1>Witches Brew and Eats</h1>
            <p class="animate__animated animate__rotate">
              Witches Brew and Eats is a unique and enchanting food and beverage
              establishment,where customers can experience a mystical
              and magical atmosphere while enjoying delicious food and drinks.
              It is a place where people can come together to
              celebrate their love for witchcraft, magic, and all things
              supernatural.
            </p>
         </div>
      </div>  
    </main>
  );
};

export default Home;
