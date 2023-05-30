import React from 'react';
import './style.scss';
import img from '../../../../../assets/images/heroIMG.jpg';import Button from '../../../../../components/Button4/Button';
;

function Tour({depplace, flightDate, price, duration, currency, numberOfStops, ArriveDate}) {



  return (
    <div className='card'>
            <div className='card-img'>
                <img src={img} alt='bla'></img>
            </div>
            <div className='card-body'>
                <h4><span className='strong-text'>Paris</span></h4>
                <div className='city-info'>
                    <div className='city-info_1'>
                        <p><span className='strong-text'>Flight date:</span> {flightDate}</p>
                        <p><span className='strong-text'>Price:</span> {price}$</p>
                        <p><span className='strong-text'>Duration:</span>{duration}</p>
                    </div>
                    <div className='city-info_2'>
                        <p><span className='strong-text'>Number of stops:</span> {numberOfStops}</p>
                        <p><span className='strong-text'>Currency:</span> USD</p>
                        <p><span className='strong-text'>Arrive date:</span> {ArriveDate}</p>
                    </div>
                </div>
            </div>
            <div className='card-button'>
                {/* <button>Add</button> */}
                <Button/>
            </div>
        </div>
  )
}

export default Tour