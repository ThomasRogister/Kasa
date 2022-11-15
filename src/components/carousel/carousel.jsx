import React, { useState } from "react";
import "../../style/style.css";

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
              <img src={picture} alt="logement" className="slider__image" />
              )}
          </div>
        );
      })}
    <div className="slider__controllers">
      <img
        className="slider__leftArrow"
        src={require("../../Assets/img/leftArrow.png")}
        alt=""
        onClick={prevSlide}
      />

      <img
        src={require("../../Assets/img/rightArrow.png")}
        alt=""
        className="slider__rightArrow"
        onClick={nextSlide}
      />
      </div>
    </section>
  );
}
export default Carrousel;
