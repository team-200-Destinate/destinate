// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Plane = () => {
//   const [flightData, setFlightData] = useState([]);
//   const [resultData, setResultData] = useState([]);

//   useEffect(() => {
//     // Fetch flight data
//     axios.get('https://destinate-production.up.railway.app/flight-confirmations')
//       .then(response => setFlightData(response.data))
//       .catch(error => console.log(error));

//     // Fetch result data
//     axios.get('https://destinate-production.up.railway.app/results')
//       .then(response => setResultData(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-2xl font-bold mb-4">Flight Confirmations</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {flightData.map(flight => (
//           <div key={flight.id} className="bg-white p-4 rounded-lg shadow">
//             <h2 className="text-lg font-bold mb-2">Flight ID: {flight.id}</h2>
//             <p className="mb-2">Source: {flight.source}</p>
//             <p className="mb-2">Price: {flight.price} {flight.currency}</p>
//             <p className="mb-2">Duration: {flight.duration}</p>
//             <div className="space-y-2">
//               {flight.segments.map(segment => (
//                 <div key={segment.number}>
//                   <p>Departure: {segment.departure.iataCode} - {segment.departure.at}</p>
//                   <p>Arrival: {segment.arrival.iataCode} - {segment.arrival.at}</p>
//                   <p>Carrier: {segment.carrierCode}</p>
//                   <p>Aircraft: {segment.aircraft}</p>
//                   <p>Duration: {segment.duration}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <h1 className="text-2xl font-bold mt-8 mb-4">Results</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {resultData.map(result => (
//           <div key={result.id} className="bg-white p-4 rounded-lg shadow">
//             <h2 className="text-lg font-bold mb-2">Result ID: {result.id}</h2>
//             <p className="mb-2">Flight ID: {result.flight_id}</p>
//             <p className="mb-2">Hotel Price: {result.hotel_price}</p>
//             <p className="mb-2">Hotel Name: {result.hotel_name}</p>
//             <img className="w-full h-auto mb-2" src={result.hotel_photo_url} alt="Hotel" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Plane ;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Plane = () => {
  const [flightData, setFlightData] = useState([]);
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    // Fetch flight data
    axios.get('https://destinate-production.up.railway.app/flight-confirmations')
      .then(response => setFlightData(response.data))
      .catch(error => console.log(error));

    // Fetch result data
    axios.get('https://destinate-production.up.railway.app/results')
      .then(response => setResultData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-4 my-32"> {/* Added my-20 for 200px margin top and bottom */}
      <h1 className="text-2xl font-bold mb-4">Flight Confirmations and Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flightData.map((flight, index) => (
          <div key={flight.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-2">Flight ID: {flight.id}</h2>
            <p className="mb-2">Source: {flight.source}</p>
            <p className="mb-2">Price: {flight.price} {flight.currency}</p>
            <p className="mb-2">Duration: {flight.duration}</p>
            <div className="space-y-2">
              {flight.segments.map(segment => (
                <div key={segment.number}>
                  <p>Departure: {segment.departure.iataCode} - {segment.departure.at}</p>
                  <p>Arrival: {segment.arrival.iataCode} - {segment.arrival.at}</p>
                  <p>Carrier: {segment.carrierCode}</p>
                  <p>Aircraft: {segment.aircraft}</p>
                  <p>Duration: {segment.duration}</p>
                </div>
              ))}
            </div>
            {resultData[index] && (
              <>
                <h2 className="text-lg font-bold mb-2 mt-4">Result ID: {resultData[index].id}</h2>
                <p className="mb-2">Hotel Price: {resultData[index].hotel_price}</p>
                <p className="mb-2">Hotel Name: {resultData[index].hotel_name}</p>
                <img className="w-full h-auto mb-2" src={resultData[index].hotel_photo_url} alt="Hotel" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plane;
