import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faImage } from "@fortawesome/free-solid-svg-icons";
import "./overview.css";
import OverviewData from "./OverviewData";
const Overview = ({ icon, title, description }) => {
  return (
    <section className="overviewSec" id="overviewSec">
      <div className="container">
        <div className="row">
          {OverviewData.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                <div className="overview">
                  <span className="icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <h2 className="tit">{item.title}</h2>
                  <p className="text">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Overview;
