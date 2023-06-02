import React from "react";
import renderStars from "./stars.js";
import "./plans.css";
const FlightCard = ({ flight, resultData, onDeleteFlight }) => {
  const matchingResult = resultData.find(
    (result) => result.flight_id === flight.id
  );

  const handleDeleteFlight = () => {
    onDeleteFlight(flight.id);
  };

  const calculateFinalPrice = () => {
    if (matchingResult) {
      const flightPrice = parseInt(flight.price);
      const hotelPrice = parseInt(matchingResult.hotel_price);
      return Math.floor(flightPrice + hotelPrice);
    }
    return flight.price;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img className="w-8 h-8 mr-2" src="logo.png" alt="Logo" />
      <div className="flex items-center mb-2">
        <div>Source: {flight.source}</div>
      </div>
      <div className="mb-2">
        Flight Price :{" "}
        <strong
          className="text-3xl text-400"
          style={{ color: "#53b0bd", fontSize: "18px" }}
        >
          ${flight.price}
        </strong>
      </div>
      <div className="mb-2">Duration: {flight.duration}</div>
      <div className="space-y-2">
        {flight.segments.map((segment) => (
          <div key={segment.number}>
            <p>
              Departure: {segment.departure.iataCode} - {segment.departure.at}
            </p>
            <p>
              Arrival: {segment.arrival.iataCode} - {segment.arrival.at}
            </p>
            <p>Duration: {segment.duration}</p>
          </div>
        ))}
      </div>
      {matchingResult && (
        <>
          <div className="text-lg font-bold mb-2 mt-4">
            Hotel Name: {matchingResult.hotel_name}
          </div>
          <div className="mb-2">Hotel Price: {matchingResult.hotel_price}</div>

          <img
            className="w-full h-auto mb-2"
            src={matchingResult.hotel_photo_url}
            alt="Hotel"
          />
          <div className="flex items-center">
            {renderStars(matchingResult.hotel_rating)}
          </div>
        </>
      )}
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={handleDeleteFlight}
        >
          Delete Trip
        </button>
        <div>
          Total Price:{" "}
          <strong
            className="text-2xl text-red-500"
            style={{ marginLeft: "10px", color: "#53b0bd" }}
          >
            {calculateFinalPrice()} $
          </strong>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
