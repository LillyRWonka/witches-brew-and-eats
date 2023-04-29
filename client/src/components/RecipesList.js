import React from 'react';
// import "../components/style.css";


function Recipe() {
  return(
    <div className='card'>
      <div className='card-body'>
        <img src="Assets\BaklavawithCardamom.png" />
        <h2 className='card-title'>This is a Recipe</h2>
        <p className='card-description'>This is a description</p>
      </div>
      <button className='card-btn'>
      <a href={`${process.env.PUBLIC_URL}/pdfs/Easy_recipe.pdf`} target="_blank" rel="noopener noreferrer">Download PDF</a>
      </button>
    </div>
  )
  }
export default Recipe;
