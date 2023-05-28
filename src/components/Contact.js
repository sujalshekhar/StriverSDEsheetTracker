import React from "react";
// import {BsInstagram} from 'react-icons/bs'
import { BsInstagram } from "react-icons/bs";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const styles = {
  display: "flex",
  gap: "3rem",
  margin: "20px",
};

const Contact = () => {
  return (
    <div style={styles}>
      <a href="https://www.instagram.com/vectoristicartist/" target="_blank">
        <BsInstagram
        className="icons"
          style={{ cursor: "pointer", transition: "transform 150ms ease-in-out"}}
          fontSize={20}
          color="white"
        />
      </a>
      <a href="https://github.com/sujalshekhar" target="_blank">
        <BsGithub
        className="icons"
          style={{ cursor: "pointer", transition: "transform 150ms ease-in-out" }}
          fontSize={20}
          color="white"
        />
      </a>
      <a href="https://www.linkedin.com/in/sujalshekhar/" target="_blank">
        <BsLinkedin
        className="icons"
          style={{ cursor: "pointer", transition: "transform 150ms ease-in-out" }}
          fontSize={20}
          color="white"
        />
      </a>
    </div>
  );
};

export default Contact;
