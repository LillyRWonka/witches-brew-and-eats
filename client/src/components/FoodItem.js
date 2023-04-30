import React from "react";
import { Link } from "react-router-dom";
// import "../components/style.css";

function FoodItem(props) {
  const { menu } = props;
  return (
    <Link to={`/products/${menu._id}`} className="link-style">
      <div className="card">
        <div className="card-body">
          <img src={require(`../Assets/${menu.image}`)} alt={menu.name} />
          <h2 className="card-title">{menu.name}</h2>
          <p className="card-description">{menu.description}</p>
        </div>
        <button className="card-btn">View Details</button>
      </div>
    </Link>
  );
}
export default FoodItem;
