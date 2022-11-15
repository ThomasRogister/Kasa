import React from "react";
import "./host.css";

function Host({ host }) {
  return (
    <div className="host">
      <span className="host__name">{host.name.split("")}</span>
      <img className="host__picture" src={host.picture} alt="" />
    </div>
  );
}

export default Host;
