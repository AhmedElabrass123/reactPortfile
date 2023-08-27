import React from "react";
import Head from "../head/Head";
import Slider from "./Slider";
import "./speakers.css";
import SpeakersData from "./SpeakersData";
const Speakers = ({ src, name, job }) => {
  return (
    <>
      <section className="speakersSec" id="speakers">
        <Head
          tit1="Creative"
          tit2="Speakers"
          para="Lorem ipsum dolor sit amet, consectetur adip consectetur adip"
        />
        <div className="container">
          <div className="row">
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Speakers;
// {/* <img src="../../../img/1.jpg" /> */}
