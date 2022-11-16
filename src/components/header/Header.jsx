import React from "react";
import LOGO from "../../assets/img/LOGO.png";
import { Link } from "react-router-dom";
import "../../style/style.css";

function Header() {
  return (
    <header>
      <img className="header__logo" src={LOGO} alt="logo Kasa" />
      <nav>
        <Link to="/" className="header__nav">
          Accueil
        </Link>
        <Link to="/About" className="header__nav">
          À propos
        </Link>
      </nav>
    </header>
  );
}
export default Header;
