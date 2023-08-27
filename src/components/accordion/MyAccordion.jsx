import { React, useState } from "react";
import Head from "../head/Head";
import AccodionData from "./AccodionData";
import "./accordion.css";
const MyAccordion = () => {
  const [active, setActive] = useState(0);
  const toggle = (i) => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };
  return (
    <>
      <section className="accordionSec">
        <Head
          tit1="Do You Have "
          tit2="Questions ?"
          para="Lorem ipsum dolor sit amet, consectetur adip consectetur adip"
        />
        <div className="container">
          {AccodionData.map((item, i) => {
            return (
              <div className="accord" key={i} onClick={() => toggle(i)}>
                <h3 className="title">
                  <span className="ques">{item.ques}</span>
                  <span className="plus">{active === i ? "-" : "+"}</span>
                </h3>
                <p className={active === i ? "show" : ""}>{item.paragrph}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MyAccordion;
