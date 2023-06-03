import React from "react";
import './ButtonADD.scss'
import axios from "axios";



const ButtonADD = ({DBObj}) => {

    const onclickButton = (obj) => {
        axios.post(`https://destinate-production.up.railway.app/flight-confirmation`, obj).then((res) => {
            console.log('post to DB'+res.data);
          })
          .catch((err) => console.log(err));
      };

  return (

      <button class="fancy" onClick={() => onclickButton(DBObj)}>
        <span class="top-key"></span>
        <span class="text">Add Ticket</span>
        <span class="bottom-key-1"></span>
        <span class="bottom-key-2"></span>
      </button>
    
  );
};

export default ButtonADD;
