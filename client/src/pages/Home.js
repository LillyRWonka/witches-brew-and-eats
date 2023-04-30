import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import witches from "../Assets/witches.jpg";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(GET_CATEGORIES);
  return (
    <main className="d-flex h-100 ">
      <div className="menu-container">
        <h4 className="text-bold fs-2">Products</h4>
        <ul className="menu-items">
          {loading ? (
            <>Loading..</>
          ) : (
            data?.categories.map((item) => (
              <li key={item._id}>
                <Link to={`/category/${item._id}`}>
                  {" "}
                  <h4 className="text-bold fs-2 mb-0">{item.name}</h4>
                </Link>
              </li>
            ))
          )}
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
