import React from "react";
import { useState } from "react";
import arrow from "../../Assets/img/arrowDropDown.png";

function DropDown({ title, content, equip }) {
  const [active, setActive] = useState(false);

  return (
    <div className="dropDown" key={`dropDown-${title}`}>
      <div className="dropDownHeader">
        <div className={`arrow ${active}`} onClick={() => setActive(!active)}>
          <img className="arrowDrop"src={arrow} alt="" />

          <div className="dropDownBtn">{title}</div>
        </div>
        {active && <div className="dropDownContent">{content}</div>}
        {active && <div className="dropDownEquip">{equip}</div>}
      </div>
    </div>
  );
}

export default DropDown;
