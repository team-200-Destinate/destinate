import React from "react";
import { Link } from "react-router-dom";
import about1 from "../../../../assets/images/about1.jpg";
import about2 from "../../../../assets/images/about2.jpg";
import Button from "../../../../components/Button/Button";

import "./about.scss";

function AboutSection() {
  return (
    <section className="about-section">
      <section className="py-10  sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-sm imgSec ">
                <img className="object-bottom rounded-md " src='https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=600'alt="" />

                <img
                  className="absolute origin-bottom-right scale-50 rounded-md -bottom-12 -right-12  "
                  src='https://cdn.pixabay.com/photo/2017/03/27/13/52/person-2178868_640.jpg'
                  alt=""
                />
              </div>
            </div>

            <div className=" cardAbout pb-52">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl ">
                Destinate... Your Journey Starts Here
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-blue-950 font-semibold ">
                Our project is a travel app that aims to provide users with
                seamless travel planning and booking experiences. With a great
                team behind it, we are dedicated to delivering high-quality
                features and ensuring a delightful coustmer journey.
              </p>
              <Link to="/contact" className="about-section__cta">
                <Button />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutSection;
