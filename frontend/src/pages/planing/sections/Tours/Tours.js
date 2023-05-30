import React from 'react'
import Tour from './Tour/Tour'

function Tours({flightInfo}) {
    
    if(flightInfo.length!==0){
        console.log('tour ')
        console.log(flightInfo)
    }

  return (
      <section className='tours-sections'>
        <h3>Best matches</h3>
        {
        flightInfo && (
        flightInfo.map(item => <Tour flightDate={item.segments[0]['departure']['at']} price={item.price} duration={item.duration} currency={item.currency} numberOfStops={item.segments[0]['numberOfStops']} ArriveDate={item.segments[0]['arrival']['at']}/>))}
    </section>
  )
}

export default Tours