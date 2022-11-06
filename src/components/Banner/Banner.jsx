import React from "react";
import "./Banner.css";

function Banner({text, img}) {
  return (
    <div className="Banner">
      <img className="BannerImg" src={img} alt="bannière paysage" />
      <span className="BannerText">{text}</span>
    </div>
  );
}

export default Banner;
