import React from "react";
import { useState } from "react";
import arrow from "../../Assets/img/arrowDropDown.png";

function DropDown({ title, content }) {
  const [active, setActive] = useState(false);
  return (
    <div className="dropDown" key={`dropDown- ${title}`}>
      <div className="dropDownHeader">
        <div className="dropDownBtn">{title}</div>
        <span
          className={`dropDownArrow ${active}`}
          onClick={() => setActive(!active)}>
          <img scr={arrow} alt=">" />
        </span>
      </div>
      {active && <div className="dropDownContent">{content}</div>}
    </div>
  );
}

export default DropDown;
