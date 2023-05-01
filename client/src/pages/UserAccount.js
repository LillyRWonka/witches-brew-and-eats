import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../utils/queries";

function UserAccount() {
  const { data } = useQuery(GET_ORDERS);
  return (
    <div>
      {Auth.loggedIn() ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1>Previous Orders</h1>
          {data?.orders?.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Order Items</th>
                  <th>Order Total</th>
                </tr>
              </thead>
              <tbody>
                {data?.orders?.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>
                      {new Date(parseInt(order.date)).toLocaleDateString(
                        "en-US"
                      )}
                    </td>
                    <td>
                      {order.menus.map((item) => (
                        <p style={{ color: "black" }}>{item.name}</p>
                      ))}
                    </td>
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
        <h1>
          You need to be logged in to view your previous orders. Please{" "}
          <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
          .
        </h1>
      )}
    </div>
  );
}
export default UserAccount;
