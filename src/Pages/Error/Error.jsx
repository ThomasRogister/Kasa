import React from "react";
import "../../style/style.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1 className="error__404"> 404</h1>
      <span className="error__text">
        {" "}
        Oups! La page que vous demandez n'existe pas.
        <br />
      </span>
      <Link className="error__link" to="/">
        Retourner sur la page d'acceuil
      </Link>
    </div>
  );
}

export default Error;
