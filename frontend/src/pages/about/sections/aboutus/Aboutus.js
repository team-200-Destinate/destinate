import React from "react";
import "./Aboutus.scss";

function Aboutus() {
  return (
    <section className="Aboutus-section">
      <div className="background-slider">
        <video autoPlay loop muted>
          <source
            src="https://cdn.pixabay.com/vimeo/822582138/river-161071.mp4?width=1280&hash=4833ded46fa64a5d011c6cacc5b8bb565cafcdb7"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="section-content">
        <h1>about us</h1>
      </div>
    </section>
  );
}

export default Aboutus;
