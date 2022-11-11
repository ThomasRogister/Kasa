import React from "react";
import "./Banner.css";

function Banner({text, img}) {
  return (
    <div className="banner">
      <img className="bannerImg" src={img} alt="bannière paysage" />
      <div className="bannerDarkGradient"></div>
      <span className="bannerText">{text}</span>
    </div>
  );
}

export default Banner;
