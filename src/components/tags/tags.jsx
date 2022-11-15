import React from "react";
import "./tags.css";

function Tags({ tags })  {
  return(
    tags.map((tag) => (
      <div className="tag__container">
        <span className="tag__content">{tag}</span>
        </div>
    ))
  )
}

export default Tags;
