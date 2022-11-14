import React from "react";
import "./dropDown.css";
import { useState } from "react";
import arrow from "../../Assets/img/arrowDropDown.png";

function DropDown({ title, content }) {
  const [active, setActive] = useState(false);

  return (
    <div className="dropDown" key={`dropDown-${title}`}>
      <div className="dropDownHeader">
        <div id="dropTitle">
          <div className="dropTitle">
            <div className="dropDownBtn">{title}</div>
            <div
              className={`arrow ${active}`}
              onClick={() => setActive(!active)}
            >
              <img className="arrowDrop" src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      {active && <div className="dropDownContent">{content}</div>}
      {/* {active && <div className="dropDownEquip">{equip}</div>} */}
    </div>
  );
}

export default DropDown;
