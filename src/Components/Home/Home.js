import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Header from "../Header/Header";
import Particle from "../Particles/Particle";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <Particle />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
