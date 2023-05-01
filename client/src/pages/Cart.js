import React, { useEffect } from "react";
//import { Link } from "react-router-dom";
import "./cart.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import auth from "../utils/auth";
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../utils/queries";
import { useLazyQuery } from "@apollo/client";
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function Cart() {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const { cart } = state;

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  // When the submit checkout method is invoked, loop through each item in the cart
  // Add each item id to the productIds array and then invoke the getCheckout query passing an object containing the id for all our products
  function submitCheckout() {
    const productIds = [];

    cart.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { menus: productIds },
    });
  }

  let totalPrice = 0;
  return (
    <div>
      <h1>Your Order!</h1>
      <ul>
        <div>
          {cart.length === 0 && (
            <div>
              <h3>Your Cart is Empty</h3>
            </div>
          )}{" "}
          <Link to="/userAccount">
            <h3>Previous Order Here!</h3>
          </Link>
        </div>
      </ul>
      <div classname="py-3 bg-warning">
        <div classname="container">
          <div className="row">
            <div className="col md-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">ID</th>
                      <th className="text-center">Product</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Total</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => {
                      totalPrice += item.quantity * item.price;
                      return (
                        <tr key={item._id}>
                          <td className="text-center">{item._id}</td>
                          <td className="text-center">{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity * item.price}</td>
                          <td className="text-center">
                            <i
                              className="fa fa-trash"
                              onClick={() => removeFromCart(item)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                    <tr key="total">
                      <td className="text-center"></td>
                      <td className="text-center">Total</td>
                      <td></td>
                      <td></td>
                      <td>{totalPrice}</td>
                      <td className="text-center"></td>
                    </tr>
                  </tbody>
                </table>
                {/* Check to see if the user is logged in. If so render a button to check out */}
                {auth.loggedIn() ? (
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={submitCheckout}
                  >
                    Checkout
                  </button>
                ) : (
                  <h1>(log in to check out)</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
