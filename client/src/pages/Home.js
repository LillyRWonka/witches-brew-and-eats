import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import witches from "../Assets/witches.jpg";

const menuItems = [
  { id: 1, title: "Drinks", link: "/drinks" },
  { id: 2, title: "Food", link: "/food" },
  { id: 3, title: "Recipes", link: "/recipes" },
];
const Home = () => {
  return (
    <main className="d-flex h-100 ">
      <div className="menu-container">
        <h4 className="text-bold fs-2">Products</h4>
        <ul className="menu-items">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>
                {" "}
                <h4 className="text-bold fs-2 mb-0">{item.title}</h4>
              </Link>
            </li>
          ))}
        </ul>
        <img src={witches} alt="Logo" />
      </div>
      <div className="flex-row justify-center mt-5">
        <div className="col-12 p-3">
          <h1 className="text-bold">Witches Brew and Eats</h1>
          <p className="description">
            Witches Brew and Eats is a unique and enchanting food and beverage
            establishment,where customers can experience a mystical and magical
            atmosphere while enjoying delicious food and drinks. It is a place
            where people can come together to celebrate their love for
            witchcraft, magic, and all things supernatural.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
