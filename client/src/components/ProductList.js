import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MENU_RESPONSES } from "../utils/queries";
import NutritionInfo from "./Nutrition";

function Product() {
  let { id } = useParams();
  const { loading, data } = useQuery(GET_MENU_RESPONSES, {
    variables: { menuId: id },
  });
  console.log(data, "data");
  return (
    <div className="prod-wrapper">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <div className="product-container">
            <h1 className="menu-title">{data.menu.menu.name}</h1>
            <div className="">
              <img
                className="prod-img"
                src={require(`../Assets/${data.menu.menu.image}`)}
                alt={data.menu.menu.name}
              />
              <div className="add">
                <button className="btn btn-lg btn-light m-2">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2>Magical Effects</h2>
            <p className="">{data.menu.menu.description}</p>

            {/* <NutritionInfo product={data.menu.menu.name} /> */}
          </div>
          <div>
            <h2>Reviews</h2>
            <p className="review">This is a review -Lilly</p>
            <button className="prod-btn">Add Review</button>
            <button className="prod-btn">Delete Review</button>
          </div>
        </>
      )}
    </div>
  );
}
export default Product;
