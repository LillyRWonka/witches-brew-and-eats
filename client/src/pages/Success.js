import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => {
        delete item.__typename;
        item.category = item.category._id;
        return item;
      });
      if (products.length) {
        const { data } = await addOrder({ variables: { menus: products } });
        const productData = data.addOrder.menus;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <div
        style={{
          height: 560,
          clear: "both",
          paddingTop: 120,
          textAlign: "center",
        }}
      >
        <h1>Success!</h1>
        <h1>Thank you for your order!</h1>
        <h1>The order will get ready in 15 minutes!</h1>
        <h1>You will now be redirected to the home page</h1>
      </div>
    </div>
  );
}

export default Success;
