import React from "react";
import "./form.css";
const MyForm = () => {
  return (
    <>
      <section className="formSec">
        <div className="container">
          <div className="row">
            <div className="left col-lg-6 col-12">
              <h2>
                Register <span>Here</span>
              </h2>
              <h4>
                nunc eu nibh vel augue mollis tincidunt id efficitur tortor .
                sed pulvinar est sit amet tellus hendrerit.
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into.
              </p>
            </div>
            <div className="right col-lg-6 col-12">
              <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Phone Number" />
                <input type="email" placeholder="Email Address" />
                <div className="butt">
                  <button>
                    <a href="#">Register</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyForm;
