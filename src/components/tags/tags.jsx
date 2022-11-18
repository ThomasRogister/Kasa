import React from "react";
import "../../style/style.css";

function Tags({ tags}) {
  return tags.map((tag, i) => (
    <div className="tag__container" key={`${tag}-${i}`}>
      <span className="tag__content">{tag}</span>
    </div>
  ));
}

export default Tags;
