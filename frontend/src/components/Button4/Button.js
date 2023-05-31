import React from "react";
import "./button.scss";
import axios from "axios";


function Button({destinateCity, setCityImg, setIsEmpty}) {

  const getImage= (city)=> {

    let apiKey = "5odyNdUAFfPcSEnMD6v1KP4ZqoWqnRRDyk6piPzmjjUVEYMCbr5Q2TtS"
    
    axios.get(`https://api.pexels.com/v1/search?query=${city}`, {
        headers: {
          Authorization: apiKey
        }
      })
      .then(res => {
        // console.log(res.data.photos[0].src.large);
        setCityImg(res.data.photos[0].src.large);
        })
      .catch(error => {
        console.error(error);
      })
  }

  const onclickButton= ()=> {
    setIsEmpty(true);

    let theCity = destinateCity;

    getImage(theCity);
    setIsEmpty(false);
  }

  return (
    <button onClick={onclickButton()}>
      Done
      <div className="star-1">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 784.11 815.53"
          className="fil0"
        >
          <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
        </svg>
      </div>
      <div className="star-2">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 784.11 815.53"
          className="fil0"
        >
          <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
        </svg>
      </div>
      <div className="star-3">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 784.11 815.53"
          className="fil0"
        >
          <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
        </svg>
      </div>
      <div className="star-4">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 784.11 815.53"
          className="fil0"
        >
          <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
        </svg>
      </div>
      <div className="star-5">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 784.11 815.53"
          className="fil0"
        >
          <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
        </svg>
      </div>
    </button>
  );
}

export default Button;
