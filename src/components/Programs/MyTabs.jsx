import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMicrophone,
  faUsers,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./program.css"
const MyTabs = ({ theSrc, time, location, theJob, theName, paragraph }) => {
  return (
    <>
      <div className="col-12 mb-5">
        <div className="programs">
          <div className="img">
            <img src={theSrc} />
          </div>
          <div className="desc">
            <div className="location">
              <span>
                <FontAwesomeIcon icon={faClock} />
                <strong>{time}</strong>
              </span>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
                <strong>{location}</strong>
              </span>
            </div>
            <h2 className="theJob">{theJob}</h2>
            <span className="theName">{theName}</span>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTabs;
