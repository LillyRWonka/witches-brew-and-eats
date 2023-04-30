import React, { useState } from 'react';
import Auth from "../utils/auth";

function UserPoints() {
  const [points, setPoints] = useState(0);

  const addPoints = (amount) => {
    setPoints(points + amount);
  };

  const redeemPoints = (amount) => {
    setPoints(points - amount);
  };

  return Auth.loggedIn() ? (
    <div className='userpoint'>
      <h2 style={{textAlign: 'center', color: 'White', fontSize: '24px' }}>User Points</h2>
      <p style={{ textAlign: 'center' }}>Points: {points}</p>
      <button onClick={() => addPoints(10)}>Add 10 points</button>
      <button onClick={() => redeemPoints(5)}>Redeem 5 points</button>
    </div>
  ) : null;
}

export default UserPoints;
