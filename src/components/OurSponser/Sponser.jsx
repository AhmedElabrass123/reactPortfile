import React from "react";
import Head from "../head/Head";
import SponserData from "./SponserData";

const Sponser = ({ img }) => {
  return (
    <>
      <section className="sponserSec" id="sponsors">
        <Head
          tit1="Our"
          tit2="Sponsers"
          para="Lorem ipsum dolor sit amet, consectetur adip consectetur adip"
        />
        <div className="container">
          <div className="row">
            {SponserData.map((item) => {
              return (
                <div className="col-lg-3 col-md-6 col-12 mb-3" key={item.id}>
                  <img src={item.src} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponser;
