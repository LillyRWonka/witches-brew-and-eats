import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "./cart.css";
import { Link } from "react-router-dom";
function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (id) => {
    const updatedData = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedData);
  };

  return (
    <div>
      <h1>Your Order!</h1>
      <ul>
        <div>{cartItems.length === 0 && (<div><h3>Your Cart is Empty</h3></div>)} <Link to="/userAccount"><h3>Previous Order Here!</h3></Link>
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
                      <th className="text-center">Image</th>
                      <th className="text-center">Product</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Total</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.image}</td>
                        <td>{item.product}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.total}</td>
                        <td>
                          <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
