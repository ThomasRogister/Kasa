import React from "react";
import "./Card.css";

function Card({ id, title, img }) {
  console.log(img);
  return (
    <div className="Card" id={id}>
      <img className="CardImg" src={img} alt="card" />
      <span className="CardTitle">{title}</span>
    </div>
  );
}

export default Card;
