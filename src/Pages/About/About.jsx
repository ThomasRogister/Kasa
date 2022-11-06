import React from "react";
import "./About.css";
import Header from "../../components/Main/Header";
import Banner from "../../components/Banner/Banner";
import backgroundAbout from "../../Assets/img/backgroundLodgement.png";

function About() {
  return (
    <div className="About">
      <Header />
      <Banner text={""} img={backgroundAbout} />
      <h1> About Kasa</h1>
    </div>
  );
}

export default About;
