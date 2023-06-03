// Hotel.js

import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import { FaStar } from "react-icons/fa";

function Hotel({ name, photoUrl, rating, price }) {
  const [flightId, setFlightId] = useState(null);

  async function generateId() {
    try {
      const response = await axios.get(
        "https://destinate-production.up.railway.app/flight-confirmations"
      );

      const flightConfirmations = response.data;

      if (flightConfirmations.length === 0) {
        throw new Error("No flight confirmations available.");
      } else {
        const lastRow = flightConfirmations[flightConfirmations.length - 1];
        const lastRowId = lastRow.id + 1;
        console.log(lastRowId);

        return lastRowId;
      }
    } catch (error) {
      console.log("Error retrieving last ID:", error);
      // Handle the error if necessary
    }
  }

  useEffect(() => {
    async function fetchFlightId() {
      const id = await generateId();
      setFlightId(id);
    }

    fetchFlightId();
  }, []);

  const onClickFun = async () => {
    const obj = {
      flightId: flightId,
      hotelName: name,
      hotelPhotoUrl: photoUrl,
      hotelRating: rating,
      hotelPrice: price,
    };

    try {
      const response = await axios.post(
        "https://destinate-production.up.railway.app/results",
        obj
      );

      console.log("Post to DB: ", response.data);
    } catch (error) {
      console.log("Error posting to DB:", error);
    }
  };

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

  return (
    <div className="flex flex-wrap hotels-card justify-center">
      <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full">
        <div className="bg-white rounded-lg h-full">
          <h3 className="text-lg font-semibold rounded-t-lg text-white h-16 text-center flex justify-center align-items-center">
            {name}
          </h3>
          <img
            src={photoUrl}
            alt={name}
            className="w-full h-52 object-cover pb-2 px-2"
          />
          <p className="m-2">Rating: {renderRatingStars(rating)}</p>
          <p className="m-2">Price: {price}$</p>

          <button onClick={onClickFun} className="fancy m-2">
            <span class="top-key"></span>
            <span class="text">Choose</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
