import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightCard from "./flightCard.js";
import "./plans.scss";

const Plane = () => {
  const [flightData, setFlightData] = useState([]);
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    // Fetch flight data
    axios
      .get("https://destinate-production.up.railway.app/flight-confirmations")
      .then((response) => setFlightData(response.data))
      .catch((error) => console.log(error));
    //https://destinate-production.up.railway.app
    // Fetch result data
    axios
      .get("https://destinate-production.up.railway.app/results")
      .then((response) => setResultData(response.data))
      .catch((error) => console.log(`Delete error(Result) ${error}`));
  }, []);

  const handleDeleteFlight = (id) => {
    const flightUrl = `https://destinate-production.up.railway.app/flight-confirmations/${id}`;

    const matchingResult = resultData.find((result) => result.flight_id === id);
    if (matchingResult) {
      handleDeleteResult(matchingResult.id);
    }

    deleteFlight();

    function deleteFlight() {
      axios
        .delete(flightUrl)
        .then((response) => {
          if (response.status === 200) {
            setFlightData(flightData.filter((flight) => flight.id !== id));
            setResultData(
              resultData.filter((result) => result.flight_id !== id)
            );
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const handleDeleteResult = (id) => {
    const resultUrl = `https://destinate-production.up.railway.app/results/${id}`;

    axios
      .delete(resultUrl)
      .then((response) => {
        if (response.status === 200) {
          setResultData(resultData.filter((result) => result.id !== id));
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.log("Result not found.");
        } else {
          console.log("Error occurred:", error);
        }
      });
  };

  return (
    <section className="plans">
    <div className="container mx-auto px-4 my-32 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Flight Confirmations and Results</h1>
      <div className="row">
        {flightData.map((flight) => (
          <div className="p-5" key={flight.id}>
            <div className="flight-card " >
              <FlightCard
                flight={flight}
                resultData={resultData}
                onDeleteFlight={handleDeleteFlight}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Plane;
