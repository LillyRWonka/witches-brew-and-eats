import React from 'react';
import "./style/style.css";
import { Link } from 'react-router-dom';


function DrinkItem() {
  return (
    <Link to="/products" className="link-style">
      <div className='card'>
        <div className='card-body'>
          <img src="Assets\BaklavawithCardamom.png" />
          <h2 className='card-title'>This is a drink item</h2>
          <p className='card-description'>This is a description</p>
        </div>
        <button className='card-btn' path='/products'>View Food</button>
      </div>
    </Link>
  )
}
export default DrinkItem;
