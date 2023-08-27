import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <section className="conference">
        <div className="container">
          <div className="row align-items-top">
            <div className="left col-md-6 col-12 mb-5">
              <h4>
                new event is a fully responsive one-page template for events
                ,conference or workshops.
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
              <p>
                Electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="right col-md-6 col-12">
              <img src="../../../img/download-app-bg.jpg" className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
