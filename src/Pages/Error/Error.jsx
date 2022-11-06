import React from "react";
import "./Error.css";
import Header from "../../components/Main/Header";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="Error">
      <Header />
      <h1> 404</h1>
      <span> Oups! La page que vous demandez n'existe pas.<br /></span>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
  );
}

export default Error;
