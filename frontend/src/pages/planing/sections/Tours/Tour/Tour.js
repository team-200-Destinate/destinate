import React, { useState } from "react";
import "./style.scss";
// import img from '../../../../../assets/images/heroIMG.jpg';
import ButtonADD from "../../../../../components/ButtonADD/ButtonADD";
import axios from "axios";

function Tour({
  flightID,
  destinatecIty,
  flightDate,
  price,
  duration,
  numberOfStops,
  ArriveDate,
  cityImg,
  setDestinateCity,
  flightInfo,
  setDesCity,
}) {
  switch (destinatecIty) {
    case "NYC":
      destinatecIty = "New York City";
      break;

    case "SFO":
      destinatecIty = "San Francisco";
      break;

    case "LON":
      destinatecIty = "London";
      break;

    case "PAR":
      destinatecIty = "Paris";
      break;

    case "BER":
      destinatecIty = "Berlin";
      break;

    case "TOK":
      destinatecIty = "Tokyo";
      break;

    case "ROM":
      destinatecIty = "Rome";
      break;

    case "SYD":
      destinatecIty = "Sydney";
      break;

    case "AMS":
      destinatecIty = "Amsterdam";
      break;

    case "TOR":
      destinatecIty = "Toronto";
      break;

    default:
      return destinatecIty;
  }

  function generateRandomCode(length) {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
  
    return code;
  }
  
  setDestinateCity(destinatecIty);

  duration = duration.slice(2);

  flightDate = flightDate.replace(/[a-zA-Z]/g, " ");
  let dateWithoutTime = flightDate.split(" ")[0];

  let timeWithoutDate = flightDate.split(" ")[1];


  ArriveDate = ArriveDate.replace(/[a-zA-Z]/g, " ");
  
  let ArriveDateWithTime =ArriveDate.split("")[1]
  let ArriveDateWithDate =ArriveDate.split("")[0]

  let randomCode = generateRandomCode(5);
  let randomGate = generateRandomCode(3);



  let DBObj = flightInfo.filter((item) => item.id === flightID);
  DBObj = DBObj[0];
  console.log(DBObj);

  setDesCity(destinatecIty);


  return (
    <div className="container">
      <div className="ticket">
        <div className="ticket-left">
          <div className="corner-seat-container">
            <div className="item">seat</div>
            <div className="lgdetail">{flightID}a</div>
          </div>
          <div className="airplane-container">
            <img
              src="https://assets.codepen.io/1026437/blackAirplane.png"
              alt="airplane-img"
            />
          </div>
          <div className="departure-time">
            <div className="item">departure time</div>
            <div className="lgdetail">{timeWithoutDate}</div>
          </div>
          <div className="departing">
            <div className="item">duration</div>
            <div className="smdetail">{duration}</div>
          </div>
        </div>
        <div className="ticket-middle">
          <div className="passenger-name">
            <div className="item text-gray-200">price</div>
            <div className="smdetail text-white">{price}$</div>
          </div>
          <div className="gate">
            <div className="item text-gray-200">gate</div>
            <div className="lgdetail text-white">{randomGate}</div>
          </div>
          <div className="flight">
            <div className="item text-gray-200">flight</div>
            <div className="lgdetail text-white">{randomCode}</div>
          </div>
          <div className="destination text-gray-200 ">
            <div className="item">destination</div>
            <div className="smdetail text-white">{destinatecIty}</div>
          </div>
          <div className="group">
            <div className="item text-gray-200 ">group</div>
            <div className="smdetail text-white">3</div>
          </div>
        </div>
        <div className="ticket-right">
          <div className="stub-flight">
            <div className="smitem">flight Date</div>
            <div className="exsmdetail">{dateWithoutTime}</div>
          </div>
          <div className="stub-seat">
            <div className="smitem">seat</div>
            <div className="exsmdetail">25a</div>
          </div>
          <div className="stub-depart">
            <div className="smitem">depart</div>
            <div className="exsmdetail">{timeWithoutDate}</div>
          </div>
          <div className="stub-passenger">
            <div className="smitem">Number of stops:</div>
            <div className="exsmdetail">{numberOfStops}</div>
          </div>
          <div className="barcode">{price}</div>
        </div>
      </div>
      <div className="Ticket-button p-3 flex justify-center">
        <ButtonADD DBObj={DBObj} />
      </div>
    </div>
  );
}

export default Tour;

{
  /* <div className='Ticket p-4'>
  <div className='bg-white shadow-md rounded-lg'>
    <div className='Ticket-header text-xl font-bold text-center p-2 rounded-t-lg bg-slate-800 text-cyan-50'>{destinatecIty}</div>
    <div className='Ticket-main flex items-center p-3'>
        <div className='Ticket-img'>
          <img src={cityImg} alt='bla' className='w-60 h-60 rounded-lg p-1  '></img>
        </div>
      <div className='Ticket-body ml-4 flex'>
        <div className='city-info flex align-items-center'>
          <div className='city-info_1 mx-9 '>
            <p className='mb-2'>
              <span className='strong-text'>Flight date:</span> {flightDate}
            </p>
            <p className='mb-2'>
              <span className='strong-text'>Price:</span> {price}$
            </p>
            <p>
              <span className='strong-text'>Duration:</span> {duration}
            </p>
          </div>
          <div className='city-info_2 mx-7'>
            <p className='mb-2'>
              <span className='strong-text'>Number of stops:</span> {numberOfStops}
            </p>
            <p className='mb-2'>
              <span className='strong-text'>Currency:</span> USD
            </p>
            <p>
              <span className='strong-text'>Arrive date:</span> {ArriveDate}
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className='Ticket-button p-1 flex justify-center'>
        <Button DBObj={DBObj} />
    </div>
  </div>
</div> */
}
