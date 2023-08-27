import React from "react";
import "./head.css";
const Head = ({ tit1, tit2, para }) => {
  return (
    <>
      <div className="head">
        <h2>
          {tit1} <span>{tit2}</span>
        </h2>
        <p>{para}</p>
      </div>
    </>
  );
};

export default Head;
