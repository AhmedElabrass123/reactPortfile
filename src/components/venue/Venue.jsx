import React from "react";
import "./venue.css";
const Venue = () => {
  return (
    <>
      <section className="venueSec" id="venue">
        <div className="container">
          <div className="row">
            <div className="content col-lg-5 col-md-6 col-12">
              <h2>Venue</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into.
              </p>
              <span>New Event</span>
              <span>120 Market Street, Suite 110</span>
              <span>san Francisco,CA 10110</span>
              <span>Tel: 010-020-0120</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Venue;
