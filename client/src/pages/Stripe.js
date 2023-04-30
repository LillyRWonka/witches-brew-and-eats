//  This is a temporary page... I will move all these codes to checkout page once it is ready.....

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../utils/queries";
import { useLazyQuery } from "@apollo/client";
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Stripe = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function submitCheckout() {
    getCheckout({
      variables: { menus: ["644628b49d3c148686c9f203"] },
    });
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <CheckOut />
      <button onClick={submitCheckout}>Checkout</button>
    </div>
  );
};

export default Stripe;

// THE BELOW IS FOR QUANTITY AND STILL WORKING ON IT.... DO NOT COPY THIS ONE

function CheckOut() {
  const actualData = [
    { name: "tea", quantity: 1, price: 15 },
    { name: "coffee", quantity: 1, price: 3 },
  ];
  const [data, setData] = useState([...actualData]);
  const onChangeHandler = (event, index) => {
    const { value } = event.target;
    if (value > 0) {
      const selectedObject = { ...actualData[index] };
      selectedObject.quantity = value;
      selectedObject.price *= value;
      actualData[index] = selectedObject;
      setData([...actualData]);
    }
  };
  let total = 0;
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {data.map((eachData, index) => {
        total += eachData.price;
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                color: "white",
                fontSize: "32px",
                height: "auto",
                marginBottom: "0px",
              }}
            >
              {eachData.name}
            </p>
            <input
              type="number"
              min={1}
              value={eachData.quantity}
              name="quantity"
              onChange={(event) => onChangeHandler(event, index)}
            ></input>
            <input
              type="number"
              value={eachData.price}
              name="price"
              disabled
            ></input>
          </div>
        );
      })}
      <div style={{ color: "white" }}>Total :{total}</div>
    </div>
  );
}
