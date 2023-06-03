// Hotels.js

import React from "react";
import Hotel from "./Hotel/Hotel";
import { FaStar } from "react-icons/fa";
import './style.scss';

function Hotels({ hotelInfo }) {
  // Helper function to convert rating number to star icons
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FaStar key={i} className="text-yellow-500 m-1" />);
    }
    if (rating % 1 !== 0) {
      stars.push(<FaStar key={Math.floor(rating)} className="text-yellow-500 m-1" />);
    }
    return <div className="flex">{stars}</div>;
  };

  // Helper function to calculate price based on rating
  const calculatePrice = (rating) => {
    const basePrice = 100;
    const ratingMultiplier = 100;
    return Math.floor( basePrice + rating * ratingMultiplier);
  };

  return (
    <div className="hotels">
      {Object.keys(hotelInfo).length > 0 && (
        <h1 className="text-center pt-10">Hotels Nearby</h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 p-20 overflow-hidden">
        {Object.keys(hotelInfo).map((hotelId) => (
          <div key={hotelId}>
            <Hotel
              name={hotelInfo[hotelId].name}
              photoUrl={hotelInfo[hotelId].photoUrl}
              rating={hotelInfo[hotelId].rating}
              price={calculatePrice(hotelInfo[hotelId].rating)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
