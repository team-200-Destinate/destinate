import React, { useState } from "react";
import axios from "axios";
import ButtonSER from "../../../../components/ButtonSER/ButtonSER";

import "./style.scss";
import "./loading-bar.scss";

const Filter = ({
  dataChanged,
  destinateCity,
  setCityImg,
  setIsEmpty,
  setHotelInfo,
  desCity,
}) => {
  const [currentCity, setCurrentCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [userDate, setUserDate] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  const [error, setError] = useState(""); // Add an error state

  const getCityFullName = (cityCode) => {
    switch (cityCode) {
      case "NYC":
        return "New York City";
      case "SFO":
        return "San Francisco";
      case "LON":
        return "London";
      case "PAR":
        return "Paris";
      case "BER":
        return "Berlin";
      case "TOK":
        return "Tokyo";
      case "ROM":
        return "Rome";
      case "SYD":
        return "Sydney";
      case "AMS":
        return "Amsterdam";
      case "TOR":
        return "Toronto";
      default:
        return "Unknown City";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if any of the fields are empty
    if (!currentCity || !destinationCity || !userDate) {
      setError("Please fill in all the fields");
      return;
    }
  
    try {
      setIsLoading(true); // Set the loading state to true
  
      const fullDestinationCity = getCityFullName(destinationCity);
  
      const response = await axios.get(
        `https://destinate-production.up.railway.app/flight-search?originCode=${currentCity}&destinationCode=${destinationCity}&dateOfDeparture=${userDate}`
      );
  
      dataChanged(response.data);
  
      const hotelResponse = await axios.get(
        `https://destinate-production.up.railway.app/hotels/${fullDestinationCity}`
      );
      setHotelInfo(hotelResponse.data);
  
      setError(""); // Reset the error state
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); // Set the loading state back to false
    }
  };
  

  return (
    <section className="filter-section">
      <div className="filter-section_content">
        <h2 className="content-h2">Tell us where do you want to go</h2>
        <form onSubmit={handleSubmit} className="content-form">
          <div className="form-content">
            <div className="form-content_item">
              <label className="font-semibold">Current City:</label>
              <select
                className="rounded-lg p-1 "
                value={currentCity}
                onChange={(e) => setCurrentCity(e.target.value)}
              >
                <option></option>
                <option value="NYC">New York City</option>
                <option value="SFO">San Francisco</option>
                <option value="LON">London</option>
                <option value="PAR">Paris</option>
                <option value="BER">Berlin</option>
                <option value="TOK">Tokyo</option>
                <option value="ROM">Rome</option>
                <option value="SYD">Sydney</option>
                <option value="AMS">Amsterdam</option>
                <option value="TOR">Toronto</option>
              </select>
            </div>
            <div className="form-content_item">
              <label className="font-semibold">Destination City:</label>
              <select
                className="rounded-lg p-1"
                value={destinationCity}
                onChange={(e) => setDestinationCity(e.target.value)}
              >
                <option></option>
                <option value="NYC">New York City</option>
                <option value="SFO">San Francisco</option>
                <option value="LON">London</option>
                <option value="PAR">Paris</option>
                <option value="BER">Berlin</option>
                <option value="TOK">Tokyo</option>
                <option value="ROM">Rome</option>
                <option value="SYD">Sydney</option>
                <option value="AMS">Amsterdam</option>
                <option value="TOR">Toronto</option>
              </select>
            </div>
            <div className="form-content_item">
              <label className="font-semibold">Date:</label>
              <input
                className="rounded-lg p-2"
                type="date"
                value={userDate}
                onChange={(e) => setUserDate(e.target.value)}
              ></input>
            </div>
          </div>

          {/* <button type='submit'>Done</button> */}
          <ButtonSER
            destinateCity={destinateCity}
            setCityImg={setCityImg}
            setIsEmpty={setIsEmpty}
          />
          {isLoading && (
            <div className="loader">
            </div>
          )}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Filter;
