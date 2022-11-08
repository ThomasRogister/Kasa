import React from "react";
import redStar from "../../Assets/img/redStar.png";
import greyStar from "../../Assets/img/greyStar.png";

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
            <img
            className="ratingStar"
            src={redStar}
            /* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toString */
            key={star.toString()}
            alt="étoile"
          />
        ) : (
          <img
            className="ratingStar"
            src={greyStar}
            key={star.toString()}
            alt="étoile"
          />
        )
      )}
    </div>
  );
}

export default Rating;
