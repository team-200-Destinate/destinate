import React from "react";
import Button from "../../../../components/ButtonRM/ButtonRM";
import "./style.scss";
import { Link } from "react-router-dom";
import airplane from "../../../../assets/images/airplane.png"






function Hero() {
  return (
    <section className="hero-section">


    <div className="home flex container">
      <div className="mainText">
        <h1>Fly <span>Smart</span>, Pay Less</h1>
      </div>


      <div className="homeImages flex">
        <div className="videoDiv">
          <video src="https://cdn.pixabay.com/vimeo/245530642/drone-flight-13132.mp4?width=1280&hash=0ce1b23ffd859bbcd358ca3ea45533de4b82672f" autoPlay muted loop className="video"></video>
        </div>
        <img src={airplane} className="plane" alt="" />
      </div>
    </div>




      {/* <div className="hero-section__container" id="home">
        <h1>
          Fly <span>Smart</span>, Pay Less
        </h1>
        <p>
          Travel is a transformative journey that liberates the soul, opening up
          a world of possibilities and experiences beyond our wildest dreams.
        </p>
        <Link to="/about" className="button-link">
          <Button />
        </Link>
      </div> */}
    </section>
  );
}

export default Hero;
