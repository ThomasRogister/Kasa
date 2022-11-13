import React from "react";
import "./host.css";

function Host({ host }) {
  return (
    <div className="host">
      <span className="hostName">{host.name.split("")}</span>
      <img className="hostPicture" src={host.picture} alt="" />
    </div>
  );
}

export default Host;
