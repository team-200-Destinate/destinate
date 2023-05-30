import React, { useEffect, useState } from 'react';
import Filter from './sections/Filter/Filter';
import Tours from './sections/Tours/Tours';
import Hotels from './sections/Hotels/Hotels';


function Planing() {
    
    const [flightInfo, setFlightInfo] = useState([]);

    if(flightInfo.length!==0){
      console.log("lllllllloooo");
      console.log(flightInfo);
    }

    const dataChanged = (data) =>{
      setFlightInfo(data);
    }

    return (
        <>
        <Filter dataChanged={dataChanged}/>
        <Tours flightInfo={flightInfo}/>
        <Hotels/>
    </>
  )
}

export default Planing