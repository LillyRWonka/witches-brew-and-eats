import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../utils/queries";
import { useParams } from "react-router-dom";

function UserAccount() {
  const [previousOrders, setPreviousOrders] = useState([]);

  const { userId } = useParams();

  const { loading, data } = useQuery(GET_ORDERS);
  const allOrders = data?.orders || [];

  const usersOrders = allOrders.filter((obj) => obj.users === userId);
  setPreviousOrders(usersOrders);

  //  useEffect(() => {
  //    // Fetch previous orders data from an API or a database
  //    fetch('https://example.com/api/previous-orders')
  //     .then(response => response.json())
  //      .then(data => setPreviousOrders(data));
  //  }, []);
  return (
    <div>
      {Auth.loggedIn() ? (
        <div>
          <h1>Previous Orders</h1>
          {previousOrders.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Order Total</th>
                </tr>
              </thead>
              <tbody>
                {previousOrders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.date}</td>
                    <td>{order.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>
              Click here to view the user Points
              <Link to="/userpoints">My Rewards</Link>
            </p>
          )}
        </div>
      ) : (
        <p>
          You need to be logged in to view your previous orders. Please{" "}
          <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
          .
        </p>
      )}
    </div>
  );
}
export default UserAccount;
