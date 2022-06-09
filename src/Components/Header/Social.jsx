import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const Social = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/mahmud2640"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Mahmud2640" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/mahmud2640"
        rel="noreferrer"
        target="_blank"
      >
        <SiFacebook />
      </a>
    </div>
  );
};

export default Social;
