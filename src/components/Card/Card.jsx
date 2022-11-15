import React from "react";
import "../../style/style.css";

function Card({ id, title, img }) {
  console.log(img);
  return (
    <div className="card" id={id}>
      <div className="card__darkGradient"></div>
      <img className="card__img" src={img} alt="card" />
      <span className="card__title">{title}</span>
    </div>
  );
}

export default Card;
