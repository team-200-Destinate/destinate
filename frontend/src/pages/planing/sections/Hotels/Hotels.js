import React from 'react';
import './style.scss';

function Hotels({ hotelInfo }) {
  return (
    <div className="hotels-container">
      {Object.keys(hotelInfo).map((hotelId) => (
        <div key={hotelId} className="hotel-card">
          <h3 className="hotel-card__name">{hotelInfo[hotelId].name}</h3>
          <img className="hotel-card__image" src={hotelInfo[hotelId].photoUrl} alt={hotelInfo[hotelId].name} />
          <p className="hotel-card__rating">Rating: {hotelInfo[hotelId].rating}</p>
        </div>
      ))}
    </div>
  );
}

export default Hotels;