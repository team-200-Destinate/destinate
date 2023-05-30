// import React from 'react'
// import './style.scss'
// import Hotel from './Hotel/Hotel'

// function Hotels({isEmpty, hotelInfo}) {


//   console.log('bla' + hotelInfo);


//   return (
//     <section className='hotels-sections'>
//         <h3>Nearby Hotels</h3>
//         {
//         isEmpty? <h1>Please first select your current city, the destinate city and the date ☝</h1> :
//           hotelInfo.map(item => <Hotel name={item.name} photoUrl={item.photoUrl} rating={item.rating}/> )
//         }
//     </section>
//   )
// }

// export default Hotels

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