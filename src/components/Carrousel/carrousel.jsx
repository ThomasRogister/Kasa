import React, { useState } from "react";
import "./carrousel.css";

function Carrousel({ slider }) {
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
     
      {slider.map((picture, i) => {
        return (
          <div className={i === current ? "slide active" : "slide"} key={i}>
            {i === current && (
              <img src={picture} alt="logement" className="image" />
              )}
          </div>
        );
      })}
    
      <img
        className="leftArrow"
        src={require("../../Assets/img/leftArrow.png")}
        alt=""
        onClick={prevSlide}
      />

      <img
        src={require("../../Assets/img/rightArrow.png")}
        alt=""
        className="rightArrow"
        onClick={nextSlide}
      />
    </section>
  );
}
export default Carrousel;
