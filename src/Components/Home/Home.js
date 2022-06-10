import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Header from "../Header/Header";
import Particle from "../Particles/Particle";
import Portfolio from "../Portfolio/Portfolio";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Particle />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;
