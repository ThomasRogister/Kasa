import React from "react";
import "./tags.css";

function Tags({ tags })  {
  return(
    tags.map((tag) => (
      <div className="tagContainer">
        <span className="tag">{tag}</span>
        </div>
    ))
  )
}

export default Tags;
