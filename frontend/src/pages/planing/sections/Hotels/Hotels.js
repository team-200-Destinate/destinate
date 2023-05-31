import React from 'react';

function Hotels({ hotelInfo }) {
  return (
    <div>
      {Object.keys(hotelInfo).map((hotelId) => (
        <div key={hotelId}>
          <h3>{hotelInfo[hotelId].name}</h3>
          <img src={hotelInfo[hotelId].photoUrl} alt={hotelInfo[hotelId].name} />
          <p>Rating: {hotelInfo[hotelId].rating}</p>
        </div>
      ))}
    </div>
  );
}

export default Hotels;