import React, { useState } from "react";
import "./carrousel.css";

import leftArrow from "../../Assets/img/leftArrow.png";
import rightArrow from "../../Assets/img/rightArrow.png";

function Carrousel ({ slider }) {
  const [current, setCurrent] = useState(0);
  const length = slider.length;

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  return (
    <section className="slider">
      <img
        scr={leftArrow}
        alt=">"
        className="leftArrow"
        onClick={prevSlide}
      />
      <img
        scr={rightArrow}
        alt="<"
        className="rightArrow"
        onClick={nextSlide}
      />

      {slider.map((picture, i) => {
        return (
          <div className={i === current ? "slide active" : "slide"} key={i}>
            {i === current && (
              <img src={picture} alt="logement" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};
export default Carrousel;
