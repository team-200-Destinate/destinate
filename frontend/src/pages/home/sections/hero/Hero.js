import React from "react";
import Button from "../../../../components/Button/Button";
import "./style.scss";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <h1>Fly <span>Smart</span>, Pay Less</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
          reprehenderit libero? Illum maxime ut repellendus. Cumque, distinctio!
          Deleniti sit odit veniam, pariatur a vel sunt eligendi accusantium
          similique quae modi?
        </p>
        <a href="#about"><Button/></a>
      </div>
    </section>
  );
}

export default Hero;
