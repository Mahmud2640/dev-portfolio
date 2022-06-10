import React from "react";
import CTA from "./CTA";
import Social from "./Social";
import "./Header.css";
import me from "../../assets/me.png";
import Typed from "react-typed";

const Header = () => {
  return (
    <header data-aos="fade-up" id="top">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>
          <Typed
            strings={["Abdullah Al Mahmud"]}
            loop
            typeSpeed={50}
            backSpeed={40}
          />
        </h1>
        <h5 className="text-light">
          <Typed
            strings={[
              "Full Stack Developer",
              "Front-End Web Developer",
              "MERN Stack Developer",
              "React Developer",
              "Freelancer",
            ]}
            loop
            typeSpeed={50}
            backSpeed={40}
          />
        </h5>
        <CTA />
        <Social />

        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
