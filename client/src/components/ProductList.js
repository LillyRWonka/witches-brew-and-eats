import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MENU_RESPONSES } from "../utils/queries";
import NutritionInfo from "./Nutrition";
import "./Nutrition.css";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW, DELETE_REVIEW } from "../utils/mutations";
import auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import "./products.css";

function Product() {
  const [review, setReview] = useState("");

  let { id } = useParams();
  const [state, dispatch] = useStoreContext();
  const [addReview, { error }] = useMutation(ADD_REVIEW);
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const { loading, data, client } = useQuery(GET_MENU_RESPONSES, {
    variables: { menuId: id },
    fetchPolicy: "no-cache",
  });

  const onReviewChandler = (e) => {
    setReview(e.target.value);
  };

  const onReviewSubmit = async () => {
    try {
      client.resetStore();
      if (review) {
        await addReview({
          variables: {
            description: review,
            users: auth.getProfile().data._id,
            menus: data.menu.menu._id,
          },
        });
      }
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setReview("");
  };

  const onDeleteReview = async (id) => {
    try {
      client.resetStore();
      await deleteReview({
        variables: {
          review: id,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addToCart = () => {
    const { cart } = state;
    const itemInCart = cart.find(
      (cartItem) => cartItem._id === data.menu.menu._id
    );
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: data.menu.menu._id,
        quantity: parseInt(itemInCart.quantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        quantity: parseInt(itemInCart.quantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...data.menu.menu, quantity: 1 },
      });
      idbPromise("cart", "put", { ...data.menu.menu, quantity: 1 });
    }
  };

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
                {data.menu.menu.category.name === "Recipes" ? (
                  <a
                    className="btn btn-lg btn-light m-2"
                    href={require(`../Assets/${data.menu.menu.pdf}`)}
                    download={data.menu.menu.pdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Recipes
                  </a>
                ) : (
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={addToCart}
                  >
                    Add to Order
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="product-nutrition">
            <div className="magic-effects">
              <h1>Magical Effects</h1>
              <p className="product-description">
                {data.menu.menu.description}
              </p>
            </div>
            <h1>Nutritional Facts</h1>
            <NutritionInfo product={data.menu.menu.name} />
          </div>
          <div>
            <h1>Reviews</h1>
            {data.menu.reviews.map((review) => {
              return (
                <div className="review-container">
                  <span className="review-user">
                    <i className="fa fa-user" />
                    {review.users.userName}
                    {auth.loggedIn() &&
                      review.users._id === auth.getProfile().data._id && (
                        <span style={{ marginLeft: "auto" }}>
                          <i
                            className="fa fa-trash"
                            onClick={() => onDeleteReview(review._id)}
                          />
                        </span>
                      )}
                  </span>
                  <span key={review._id} className="review">
                    {review.description}
                  </span>
                </div>
              );
            })}
            {auth.loggedIn() ? (
              <>
                <textarea
                  type="text"
                  className="form-control review-area"
                  placeholder="Add your review"
                  onChange={(e) => onReviewChandler(e)}
                  value={review}
                >
                  {review}
                </textarea>
                <button
                  className="btn btn-lg btn-light m-2"
                  onClick={onReviewSubmit}
                >
                  Add Review
                </button>
              </>
            ) : (
              <></>
            )}
            {error && (
              <div className="my-3 p-3 text-white">{error.message}</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Product;
