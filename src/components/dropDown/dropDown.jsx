import React from "react";
import { useState } from "react";
import arrow from "../../Assets/img/arrowDropDown.png";

function DropDown({ title, content, equip }) {
  const [active, setActive] = useState(false);

  return (
    <div className="dropDown" key={`dropDown- ${title}`}>
      <div className="dropDownHeader">
        <span
          className={`dropDownArrow ${active}`}
          onClick={() => setActive(!active)}
        >
          <div className="dropDownBtn">{title}</div>
        </span>
        {active && <div className="dropDownContent">{content}</div>}
        {active && <div className="dropDownEquip">{equip}</div>}
      </div>
    </div>
  );
}

export default DropDown;
