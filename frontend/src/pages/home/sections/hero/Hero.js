import React from "react";
import Button from "../../../../components/ButtonRM/ButtonRM";
import "./style.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
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
      </div>
    </section>
  );
}

export default Hero;
