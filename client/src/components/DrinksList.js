import React from 'react';
import "./style/style.css";
import { Link, useNavigate } from 'react-router-dom';
import { GET_MENU_ON_CATEGORY } from '../utils/queries';
import { useQuery } from '@apollo/client';

function DrinkItem({ item }) {

  const { loading, error, data } = useQuery(GET_MENU_ON_CATEGORY);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! </p>;
  const drinkMenuItems = data.menus.id;

  const drinkSelection = () => {
    navigate.push(`/products/${item}`);

  };

  return (

    //this is what we iniitally started off with 

    // <Link to={`/products/${menu}`} className='link-style'>
    //   <div className='card'>
    //     <div className='card-body'>
    //       <img src='Assets\BaklavawithCardamom.png' alt='image of drink item' />
    //       <h2 className='card-title'>name of time</h2>
    //       <p className='card-description'>This is a description</p>
    //     </div>
    //     <button className='card-btn' onClick={drinkSelection}>View Food</button>
    //   </div>
    // </Link>



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

    <div>
      <h1>Drink Menu</h1>
      <ul>


        {drinkMenuItems.map(item => (
          <li key={item._id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <img src={item.image} alt={item.name} />
            <Link to={`/products/${item}`} className='link-style'>
              <button className='card-btn' onClick={drinkSelection}>View Food</button>
            </Link>

          </li>

        ))}
      </ul>
    </div>


  )
}
export default DrinkItem;
