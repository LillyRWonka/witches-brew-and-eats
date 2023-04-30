import React from 'react';
import "./style/style.css";
import { Link, useNavigate } from 'react-router-dom';


function DrinkItem({ id }) {
  const history = useNavigate();

  const drinkSelection = () => {
    history.push(`/products/${id}`);
  };

  return (
    <Link to={`/products/${id}`} className='link-style'>
      <div className='card'>
        <div className='card-body'>
          <img src='Assets\BaklavawithCardamom.png' alt='image of drink item' />
          <h2 className='card-title'>This is a drink item</h2>
          <p className='card-description'>This is a description</p>
        </div>
        <button className='card-btn' onClick={drinkSelection}>View Food</button>
      </div>
    </Link>
  )
}
export default DrinkItem;
