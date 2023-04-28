import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function UserAccount() {
  const [previousOrders, setPreviousOrders] = useState([]);

  useEffect(() => {
    // Fetch previous orders data from an API or a database
    fetch('https://example.com/api/previous-orders')
      .then(response => response.json())
      .then(data => setPreviousOrders(data));
  }, []);

  return (
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
            {previousOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No previous orders found!        
          You need to be logged in to view your previous orders. Please{' '}
          <Link to="/login">login</Link> or <Link to="/register">Register.</Link>
        </p>
      )}
    </div>
  );
}

export default UserAccount;