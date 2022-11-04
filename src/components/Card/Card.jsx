import React from "react";
import "./Card.css";

function Card({ id, titre, img }) {
  console.log(img);
  return (
    <div className="Card" id={id}>
      <img className="CardImg" src={img} alt="Tuile" />
      <span className="CardTitle">{titre}</span>
    </div>
  );
}

export default Card;
