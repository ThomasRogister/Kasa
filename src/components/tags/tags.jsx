import React from "react";
import "../../style/style.css";

function Tags({ tags}) {
  return tags.map((tag, index) => (
    <div className="tag__container" key={`${tag}-${index}`}>
      <span className="tag__content">{tag}</span>
    </div>
  ));
}

export default Tags;
