import React from "react";


function Host ({ host }) {
  return (
    <div className="host">
      <span className="hostName">{host.name.split(" ")}</span>
      <img className="host.picture" src={host.picture} alt=""  />
    </div>
  );
};

export default Host;
