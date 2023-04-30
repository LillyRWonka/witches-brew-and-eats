import React from 'react';
import NutritionInfo from './Nutrition';


function Product() {
    return(
    <div className='prod-wrapper'>
      <div className=''>
      <h1>Product title</h1>
        <div className=''>
          <img className='prod-img' src="Assets\BaklavawithCardamom.png" />
          <h2 className=''>This is a product item</h2>
          <div className='add'>
          <button className='prod-btn'>Add to Order</button>
        <button className='prod-btn'>QTY</button>
            </div>
        </div>
      </div>
      <div>
      <h2>Magical Effects</h2>
      <p className=''>This is a description</p>
      <h2>Nutritional Facts</h2>
      <p className=''>These are the facts! (pull from API)</p>
      </div>
      <div>
      <h2>Reviews</h2>
      <p className='review'>This is a review 
      -Lilly</p>
      <button className='prod-btn'>Add Review</button>
        <button className='prod-btn'>Delete Review</button>
      </div>
      </div>
    )
    }
  export default Product;