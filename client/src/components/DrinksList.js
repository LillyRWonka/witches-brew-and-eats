import React from 'react';
import "./style/style.css";
import { Link, useNavigate } from 'react-router-dom';


function DrinkItem({ menu }) {
  const navigate = useNavigate();

  const drinkSelection = () => {
    navigate.push(`/products/${menu}`);

  };

  return (

    //this is what we iniitally started off with 

    <Link to={`/products/${menu}`} className='link-style'>
      <div className='card'>
        <div className='card-body'>
          <img src='Assets\BaklavawithCardamom.png' alt='image of drink item' />
          <h2 className='card-title'>name of time</h2>
          <p className='card-description'>This is a description</p>
        </div>
        <button className='card-btn' onClick={drinkSelection}>View Food</button>
      </div>
    </Link>

    // <div className="drinks-grid">
    //   {menu.map((menu) => (
    //     <Link to={`/products/${menu}`} className='link-style'>

    //       <div key={`${menu.id}-${menu.category}`} className="drink-card">
    //         <img src={menu.image.url} alt={menu.name} />
    //         <div className="drink-details">
    //           <p>{menu.description}</p>
    //           <p>{menu.price}</p>
    //           <button className='card-btn' onClick={drinkSelection}>View Food</button>

    //         </div>
    //       </div>
    //     </Link>

    //   ))}
    // </div>

  )
}
export default DrinkItem;
