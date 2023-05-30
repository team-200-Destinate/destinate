import React from 'react'
import Tour from './Tour/Tour'
import './style.scss'

function Tours({flightInfo, setDestinateCity, cityImg, isEmpty, setDesCity}) {

  return (
      <section className='tours-sections'>
        <h3>Best matches</h3>
        {
        isEmpty? <h1>Please first select your current city, the destinate city and the date ☝</h1> :
        flightInfo && (
        flightInfo.map(item => <Tour flightID={item.id} destinatecIty={item.segments[item.segments.length-1]['arrival']['iataCode']} flightDate={item.segments[0]['departure']['at']} price={item.price} duration={item.duration} numberOfStops={item.segments[item.segments.length-1]['numberOfStops']} ArriveDate={item.segments[item.segments.length-1]['arrival']['at']} cityImg={cityImg} setDestinateCity={setDestinateCity} flightInfo={flightInfo} setDesCity={setDesCity}/>))}
    </section>
  )
}

export default Tours