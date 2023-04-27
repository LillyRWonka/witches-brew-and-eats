//  This is a temporary page... I will move all these codes to checkout page once it is ready.....

import React, { useEffect } from "react";
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
      <button onClick={submitCheckout}>Checkout</button>
    </div>
  );
};

export default Stripe;
