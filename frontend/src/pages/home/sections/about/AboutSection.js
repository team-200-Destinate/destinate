import React from "react";
import { Link } from "react-router-dom";

import "./about.scss";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section__image-container">
        <div className="about-section__content">
          <div className="card">
            <h2 className="about-section__title">About Our Website</h2>
            <div className="about-section__description-container">
              <p className="about-section__description">
                Welcome to our website, where you can easily calculate the
                distances between two places and find the cheapest flights
                available. We provide a convenient way for you to plan your
                travels and discover the best options for your journey.
              </p>
              <p className="about-section__description">
                Our platform utilizes advanced algorithms to search and compare
                flight prices from various airlines, allowing you to find the
                most affordable options that suit your preferences. Whether
                you're planning a vacation or a business trip, we've got you
                covered.
              </p>
              <p className="about-section__description">
                Additionally, our website offers information on hotels located
                in the areas you wish to travel to. You can explore a wide range
                of accommodation options, including luxury resorts, cozy bed and
                breakfasts, and budget-friendly hotels, ensuring you find the
                perfect place to stay during your journey.
              </p>
            </div>
          </div>
          <Link to="/contact" className="about-section__cta">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
