import React from "react";
import FoodItem from "../components/FoodItem";
import "../components/style/style.css";
import { useQuery } from "@apollo/client";
import { GET_MENU_ON_CATEGORY } from "../utils/queries";
import { useParams } from "react-router-dom";

function App() {
  let { id } = useParams();
  const { loading, data } = useQuery(GET_MENU_ON_CATEGORY, {
    variables: { categoryId: id },
  });

  return (
    <div className="wrapper">
      {loading ? (
        <>Loading..</>
      ) : (
        data?.menus?.map((menu) => {
          return <FoodItem menu={menu} />;
        })
      )}
    </div>
  );
}

export default App;
