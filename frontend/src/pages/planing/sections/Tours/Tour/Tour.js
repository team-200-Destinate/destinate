import React, { useState } from 'react';
import './style.scss';
// import img from '../../../../../assets/images/heroIMG.jpg';
import Button from '../../../../../components/Button5/Button';
import axios from 'axios';



function Tour({flightID, destinatecIty, flightDate, price, duration, numberOfStops, ArriveDate, cityImg, setDestinateCity, flightInfo, setDesCity}) {
    
    switch(destinatecIty){
        case 'NYC':
            destinatecIty = 'New York City';
            break;

        case 'SFO':
            destinatecIty = 'San Francisco';
            break;

        case 'LON':
            destinatecIty = 'London';
            break;

        case 'PAR':
            destinatecIty = 'Paris';
            break;
        
        case 'BER':
            destinatecIty = 'Berlin';
            break;
        
        case 'TOK':
            destinatecIty = 'Tokyo';
            break;

        case 'ROM':
            destinatecIty = 'Rome';
            break;

        case 'SYD':
            destinatecIty = 'Sydney';
            break;

        case 'AMS':
            destinatecIty = 'Amsterdam';
            break;

        case 'TOR':
            destinatecIty = 'Toronto';
            break;

        default: return destinatecIty;
    }

    setDestinateCity(destinatecIty);

    duration = duration.slice(2);

    flightDate = flightDate.replace(/[a-zA-Z]/g, " ");

    ArriveDate = ArriveDate.replace(/[a-zA-Z]/g, " ");

    
    // const objToDB = {
    //     objFrom:,
    //     objTo: 'destinatecIty',
    //     objFlightDate: flightDate,
    //     objPrice: price,
    //     objDuration: duration,
    //     objNumberOfStops: numberOfStops,
    //     objCurrency : 'USD',
    //     objArriveDate: ArriveDate
    // }

    // console.log(objToDB);
    
    
    let DBObj = flightInfo.filter(item => item.id === flightID);
    DBObj = DBObj[0];
    console.log(DBObj);

    setDesCity(destinatecIty);    

  return (
    <div className='card'>
            <div className='card-img'>
                <img src={cityImg} alt='bla'></img>
            </div>
            <div className='card-body'>
                <h4><span className='strong-text'>{destinatecIty}</span></h4>
                <div className='city-info'>
                    <div className='city-info_1'>
                        <p><span className='strong-text'>Flight date: </span> {flightDate}</p>
                        <p><span className='strong-text'>Price: </span> {price}$</p>
                        <p><span className='strong-text'>Duration: </span>{duration}</p>
                    </div>
                    <div className='city-info_2'>
                        <p><span className='strong-text'>Number of stops: </span> {numberOfStops}</p>
                        <p><span className='strong-text'>Currency: </span> USD</p>
                        <p><span className='strong-text'>Arrive date: </span> {ArriveDate}</p>
                    </div>
                </div>
            </div>
            <div className='card-button'>
                <Button DBObj={DBObj}/>
            </div>
        </div>
  )
}

export default Tour