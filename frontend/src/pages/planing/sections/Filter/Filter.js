import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../../../components/Button4/Button';

import './style.scss';

const Filter = ({ dataChanged, destinateCity, setCityImg, setIsEmpty, setHotelInfo, desCity }) => {
  const [currentCity, setCurrentCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [userDate, setUserDate] = useState('');

  const getCityFullName = (cityCode) => {
    switch (cityCode) {
      case 'NYC':
        return 'New York City';
      case 'SFO':
        return 'San Francisco';
      case 'LON':
        return 'London';
      case 'PAR':
        return 'Paris';
      case 'BER':
        return 'Berlin';
      case 'TOK':
        return 'Tokyo';
      case 'ROM':
        return 'Rome';
      case 'SYD':
        return 'Sydney';
      case 'AMS':
        return 'Amsterdam';
      case 'TOR':
        return 'Toronto';
      default:
        return 'Unknown City';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fullDestinationCity = getCityFullName(destinationCity); // Call the getCityFullName function to get the full city name

      const response = await axios.get(
        `https://destinate-production.up.railway.app/flight-search?originCode=${currentCity}&destinationCode=${destinationCity}&dateOfDeparture=${userDate}`
      );

      dataChanged(response.data);

      const hotelResponse = await axios.get(`https://destinate-production.up.railway.app/hotels/${fullDestinationCity}`);
      setHotelInfo(hotelResponse.data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <section className='filter-section'>
      <div className='filter-section_content'>
        <h2 className='content-h2'>Tell us where do you want to go</h2>
        <form onSubmit={handleSubmit} className='content-form'>
          <div className='form-content'>
            <div className='form-content_item'>
              <label>Current City:</label>
              <select value={currentCity} onChange={(e) => setCurrentCity(e.target.value)}>
                <option></option>
                <option value='NYC'>New York City</option>
                <option value='SFO'>San Francisco</option>
                <option value='LON'>London</option>
                <option value='PAR'>Paris</option>
                <option value='BER'>Berlin</option>
                <option value='TOK'>Tokyo</option>
                <option value='ROM'>Rome</option>
                <option value='SYD'>Sydney</option>
                <option value='AMS'>Amsterdam</option>
                <option value='TOR'>Toronto</option>
              </select>
            </div>
            <div className='form-content_item'>
              <label>Destination City:</label>
              <select value={destinationCity} onChange={(e) => setDestinationCity(e.target.value)}>
                <option></option>
                <option value='NYC'>New York City</option>
                <option value='SFO'>San Francisco</option>
                <option value='LON'>London</option>
                <option value='PAR'>Paris</option>
                <option value='BER'>Berlin</option>
                <option value='TOK'>Tokyo</option>
                <option value='ROM'>Rome</option>
                <option value='SYD'>Sydney</option>
                <option value='AMS'>Amsterdam</option>
                <option value='TOR'>Toronto</option>
              </select>
            </div>
            <div className='form-content_item'>
              <label>Date:</label>
              <input type='date' value={userDate} onChange={(e) => setUserDate(e.target.value)}></input>
            </div>
          </div>

          {/* <button type='submit'>Done</button> */}
          <Button destinateCity={destinateCity} setCityImg={setCityImg} setIsEmpty={setIsEmpty} />
        </form>
      </div>
    </section>
  );
};
//
export default Filter;