import React from "react";
import "./contactHead.scss";

function ContactHead() {
  return (
    <section className="contactHead">
      <section className="Aboutus-section">
        <div className="background-slider">
          <video autoPlay loop muted>
            <source
              src="https://cdn.pixabay.com/vimeo/537102350/waves-71122.mp4?width=1280&hash=f7bce0aa0f21953ffcf28960a773750cc1ea9262"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="section-content">
          <h1>contact us</h1>
        </div>
      </section>
    </section>
  );
}

export default ContactHead;
