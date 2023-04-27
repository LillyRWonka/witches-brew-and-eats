import React from 'react';
import React, { useState } from "react";

export default function Card(drink) {
    const cardStyle = {
      width: '18rem',
    };

    return (
        <div className="container">
          <div className="card" style={cardStyle}>
           
            <div className="card-body">
            <h5 className="card-title">Name: {drink.name}</h5>
            <p><img
              className="card-img-top"
              src={drink.img}
              alt="Card cap"
            /></p>
              <p className="card-text">ID: {drink.id}</p>
              <a href="#" className="btn btn-primary">
                See {drink.name}
              </a>
            </div>
          </div>
        </div>
      );
    }
     