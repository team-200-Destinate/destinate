import React from "react";
import Hero from "./sections/hero/Hero";
import AboutSection from "./sections/about/AboutSection";
import News from "./sections/news/news";
import TustedBy from "./sections/trustedBy/TrustedBy";


function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <News />
      <TustedBy/>
    </>
  );
}

export default Home;
