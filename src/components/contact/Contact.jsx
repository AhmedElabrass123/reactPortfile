import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <section className="messageSec" id="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="left col-md-6 col-12 mb-5">
              <h2>
                New <span>Events</span>
              </h2>
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
                containing Lorem Ipsum passages, and more recently .
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <button>
                <a href="#">download now</a>
              </button>
            </div>
            <div className="right col-md-6 col-12">
              <form>
                <div className="tit mb-5">
                  <h2>
                    keep in <span>touch</span>
                  </h2>
                </div>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Message" />
                <div className="butt">
                  <button>
                    <a href="#">Send</a>
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

export default Contact;
