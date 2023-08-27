import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitterSquare,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="mb-5">
        <div className="container">
          <div className="content">
            <p>
              Copyright @ 2023 Your Company | Design :{" "}
              <span>Ahmed Elabrass</span>
            </p>
            <div className="links">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
