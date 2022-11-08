import React from "react";
import "./tags.css";

function Tags({ tags }) {
  return(
    tags.map((tag) => (
        <span className="tag">{tag}</span>
    ))
  )
}

export default Tags;
