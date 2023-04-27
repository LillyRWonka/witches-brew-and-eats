import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function OrderConfirmation() {
  const location = useLocation();
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    // Get the order data from the location state
    if (location.state && location.state.order) {
      setOrderData(location.state.order);
      return;
    }

    // Alternatively, fetch the order data from an API
    fetch('https://example.com/api/order')
      .then(response => response.json())
      .then(data => setOrderData(data));
  }, [location.state]);

  return (
    <div>
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been confirmed with the following details:</p>
      <ul>
        <li>Order ID: {orderData.id}</li>
        <li>Order Date: {orderData.date}</li>
        <li>Order Total: {orderData.total}</li>
      </ul>
    </div>
  );
}

export default OrderConfirmation;