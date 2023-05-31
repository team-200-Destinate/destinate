import React, { useState } from 'react';
import Filter from './sections/Filter/Filter';
import Tours from './sections/Tours/Tours';
import Hotels from './sections/Hotels/Hotels';


function Planing() {
    
    const [flightInfo, setFlightInfo] = useState([]);

    const [hotelInfo, setHotelInfo] = useState([]);
    
    const [cityImg, setCityImg] = useState('');
    
    const [destinateCity, setDestinateCity] = useState('');
    
    const [isEmpty, setIsEmpty] = useState(true)
    
    const [desCity, setDesCity] = useState('');
    
    const dataChanged = (data) =>{
      setFlightInfo(data);
    }

    return (
        <>
        <Filter dataChanged={dataChanged} destinateCity={destinateCity} setCityImg={setCityImg} setIsEmpty={setIsEmpty} desCity={desCity} setHotelInfo={setHotelInfo}/>
        <Tours flightInfo={flightInfo} setDestinateCity={setDestinateCity} cityImg={cityImg} isEmpty={isEmpty} setDesCity={setDesCity}/>
        <Hotels isEmpty={isEmpty} hotelInfo={hotelInfo}/>
    </>
  )
}

export default Planing