import React from "react";
import "./banner.css";

function Banner({text, img}) {
  return (
    <div className="banner">
      <img className="banner__img" src={img} alt="bannière paysage" />
      <div className="banner__darkGradient"></div>
      <span className="banner__text">{text}</span>
    </div>
  );
}

export default Banner;
