import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Assets/WBELogo.png";
import "./index.css";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ALL_MENU } from "../../utils/queries";

const Header = () => {
  const { loading, data } = useQuery(GET_ALL_MENU);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && data) {
      const addList = async () => {
        const apiData = data.getAllMenus;
        const names = apiData.map((title) => {
          return {
            name: title.name,
            id: title._id,
            category: title.category.name.toLowerCase(),
          };
        });

        //Sort names in ascending order
        //reference
        let input = document.getElementById("input");
        //Execute function on keyup
        input.addEventListener("keyup", (e) => {
          //loop through above array
          //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
          removeElements();
          for (let i of names) {
            //convert input to lowercase and compare with each string
            if (
              input.value !== "" &&
              i.name.toLowerCase().startsWith(input.value.toLowerCase())
            ) {
              console.log(i);
              //create li element
              let listItem = document.createElement("li");
              //One common class name
              listItem.classList.add("list-items");
              listItem.style.cursor = "pointer";
              listItem.addEventListener("click", () => {
                input.value = "";
                removeElements();
                navigate(`/products/${i.id}`);
              });
              //Display matched part in bold
              let word = "<b>" + i.name.substr(0, input.value.length) + "</b>";
              word += i.name.substr(input.value.length);
              //display the value in array
              listItem.innerHTML = word;
              document.querySelector(".list").appendChild(listItem);
            }
          }
        });
      };
      addList();
    }
  }, [data, loading, navigate]);

  const removeElements = () => {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  };

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
            <div
              className="d-flex flex-column"
              style={{
                position: "relative",
              }}
            >
              <input
                className="search-box"
                id="input"
                type="text"
                placeholder="Search..."
              />
              <ul class="list"></ul>
            </div>
            <Link className="btn btn-lg btn-success m-2" to="/userAccount">
              Welcome to {Auth.getProfile().data.userName}'s profile
            </Link>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
            <Link
              className="btn btn-lg  m-2 animate_animated animate_bounce"
              to="/cart"
            >
              <div class="icon">
                <i class="fa fa-shopping-basket" />
                {totalItems} items
              </div>
            </Link>
          </>
        ) : (
          <>
            <div
              className="d-flex flex-column"
              style={{
                position: "relative",
              }}
            >
              <input
                className="search-box"
                id="input"
                type="text"
                placeholder="Search..."
              />
              <ul class="list"></ul>
            </div>
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
                <i className="fa fa-shopping-basket" />
                {totalItems} items
              </div>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
