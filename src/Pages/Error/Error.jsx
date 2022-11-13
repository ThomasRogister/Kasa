import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1 className="title404"> 404</h1>
      <span className="text404"> Oups! La page que vous demandez n'existe pas.<br /></span>
      <Link className="link404" to="/">Retourner sur la page d'acceuil</Link>
    </div>
  );
}

export default Error;
