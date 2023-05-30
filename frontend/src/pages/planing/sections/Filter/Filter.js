import React from 'react';
import axios from 'axios';
import Button from '../../../../components/Button4/Button';

import './style.scss';


function Filter({dataChanged, destinateCity, setCityImg, setIsEmpty, setHotelInfo, desCity}) {
    
    const getHotelData = ()=>{
        //https://destinate-production.up.railway.app/hotels/london
        axios.get(`https://destinate-production.up.railway.app/hotels/london`).then(res => {
        console.log(res.data)    
        setHotelInfo(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }


    const submitData = (e) => {
        e.preventDefault();
        
        let currentCityFromUser = e.target.currentCity.value;
        let destinationCityFromUser = e.target.destinationCity.value;
        let dateFormUser = e.target.userDate.value;

        // http://localhost:5011/flight-search?originCode=NYC&destinationCode=SFO&dateOfDeparture=2023-06-02
        axios.get(`http://localhost:5011/flight-search?originCode=${currentCityFromUser}&destinationCode=${destinationCityFromUser}&dateOfDeparture=${dateFormUser}`)
        .then(res => {
            console.log(res.data);
            dataChanged(res.data);
            getHotelData();
        })
        .catch(err => {
            console.log(err);
        });

    }
    
    
    return (
    <section className='filter-section'>
        <div className='filter-section_content'>
            <h2 className='content-h2'>Tell us where do you want to go</h2>
            <form onSubmit={submitData} className='content-form'>
                <div className='form-content'>
                    <div className='form-content_item'>
                        <label>Current City:</label>
                        <select id='currentCity'>
                            <option></option>
                            <option value={'NYC'}>New York City</option>
                            <option value={'SFO'}>San Francisco</option>
                            <option value={'LON'}>London</option>
                            <option value={'PAR'}>Paris</option>
                            <option value={'BER'}>Berlin</option>
                            <option value={'TOK'}>Tokyo</option>
                            <option value={'ROM'}>Rome</option>
                            <option value={'SYD'}>Sydney</option>
                            <option value={'AMS'}>Amsterdam</option>
                            <option value={'TOR'}>Toronto</option>
                        </select>
                    </div>
                    <div className='form-content_item'>
                        <label>Destination City:</label>
                        <select id='destinationCity'>
                            <option></option>
                            <option value={'NYC'}>New York City</option>
                            <option value={'SFO'}>San Francisco</option>
                            <option value={'LON'}>London</option>
                            <option value={'PAR'}>Paris</option>
                            <option value={'BER'}>Berlin</option>
                            <option value={'TOK'}>Tokyo</option>
                            <option value={'ROM'}>Rome</option>
                            <option value={'SYD'}>Sydney</option>
                            <option value={'AMS'}>Amsterdam</option>
                            <option value={'TOR'}>Toronto</option>
                        </select>
                    </div>
                    <div className='form-content_item'>
                        <label>Date:</label>
                        <input type='date' id='userDate'></input>
                    </div>
                </div>

                {/* <button type='submit'>Done</button> */}
                <Button destinateCity={destinateCity} setCityImg={setCityImg} setIsEmpty={setIsEmpty}/>
            </form>
        </div>
    </section>
    
  )
}

export default Filter