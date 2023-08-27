import React from "react";
import "./watch.css";
const Watch = () => {
  return (
    <>
      <section className="watchSec">
        <div className="container">
          <div className="row align-items-top">
            <div className="left col-md-6 col-12 mb-5">
              <h2>watch video</h2>
              <p>
                Question ut libero sapien.integer tellus nisl,efficitur sed
                dolor at,Vehicula finibus massa.Sed tincidunt metus sed eleifend
                suscipit.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </div>
            <div className="right col-md-6 col-12">
              {/* <img src="../../../img/download-app-bg.jpg" className="w-100" /> */}
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/mPpDCDSx_Mw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Watch;
