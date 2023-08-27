import { React, useState } from "react";
import "./program.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMicrophone,
  faUsers,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { tab1, tab2, tab3 } from "./ProgramsData";
import Head from "../head/Head";
import MyTabs from "./MyTabs";

const Programs = ({ theSrc, time, location, theJob, theName, paragraph }) => {
  const [tab, setTab] = useState("tab1");
  const switchTab = (tab) => {
    setTab(tab);
  };
  return (
    <>
      <section className="programsSec" id="programs">
        <Head
          tit1="Creative"
          tit2="Programs"
          para="Lorem ipsum dolor sit amet, consectetur adip consectetur adip"
        />
        <div className="container">
          <div className="links mb-5">
            <span
              style={{
                color: tab === "tab1" ? "var(--color-primary)" : "",
                borderBottom:
                  tab === "tab1" ? "3px solid var(--color-gray)" : "",
              }}
              onClick={() => switchTab("tab1")}
            >
              First Day
            </span>
            <span
              style={{
                color: tab === "tab2" ? "var(--color-primary)" : "",
                borderBottom:
                  tab === "tab2" ? "3px solid var(--color-gray)" : "",
              }}
              onClick={() => switchTab("tab2")}
            >
              Second Day
            </span>
            <span
              style={{
                color: tab === "tab3" ? "var(--color-primary)" : "",
                borderBottom:
                  tab === "tab3" ? "3px solid var(--color-gray)" : "",
              }}
              onClick={() => switchTab("tab3")}
            >
              Third Day
            </span>
          </div>
          <div className="row">
            {tab === "tab2"
              ? tab2.map((item) => {
                  return (
                    <MyTabs
                      theSrc={item.src}
                      time={item.time}
                      location={item.location}
                      theJob={item.theJob}
                      theName={item.theName}
                      paragraph={item.paragraph}
                    />
                  );
                })
              : tab === "tab3"
              ? tab3.map((item) => {
                  return (
                    <MyTabs
                      theSrc={item.src}
                      time={item.time}
                      location={item.location}
                      theJob={item.theJob}
                      theName={item.theName}
                      paragraph={item.paragraph}
                    />
                  );
                })
              : tab1.map((item) => {
                  return (
                    <MyTabs
                      theSrc={item.src}
                      time={item.time}
                      location={item.location}
                      theJob={item.theJob}
                      theName={item.theName}
                      paragraph={item.paragraph}
                    />
                  );
                })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
