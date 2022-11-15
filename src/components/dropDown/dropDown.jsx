import React from "react";
import "../../style/style.css";
import { useState } from "react";
import arrow from "../../Assets/img/arrowDropDown.png";

function DropDown({ title, content }) {
  const [active, setActive] = useState(false);

  return (
    <div className="dropDown" key={`dropDown-${title}`}>
      <div className="dropDown__header">
        <div id="dropDown__title">
          <div className="dropDown__title">
            <div className="dropDown__btn">{title}</div>
            <div
              className={`dropDown__arrow ${active}`}
              onClick={() => setActive(!active)}
            >
              <img className="dropDown__arrowImg" src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      {active && <div className="dropDown__content">{content}</div>}
      {/* {active && <div className="dropDownEquip">{equip}</div>} */}
    </div>
  );
}

export default DropDown;
