import React from "react";
import "./Card.css";

function Card({ id, title, img }) {
  console.log(img);
  return (
    <div className="card" id={id}>
      <div classname darkGradient></div>
      <img className="cardImg" src={img} alt="card" />
      <span className="cardTitle">{title}</span>
    </div>
  );
}

export default Card;
