import React from "react";
import "../../style/style.css";
import dataLodgement from "../../assets/data/dataLodgement.json";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import Banner from "../../components/banner/banner";
import backgroundHome from "../../assets/img/backgroundHome.png";

function Home() {
  return (
    <div className="home">
      <Banner text={"Chez vous, partout et ailleurs"} img={backgroundHome} />
      <div className="home__lodgementList">
        {dataLodgement.map((logement) => (
          <Link
            className="home__link"
            key={logement.id}
            to={"/Lodgement/" + logement.id}
          >
            <Card
              key={logement.id}
              id={logement.id}
              img={logement.cover}
              title={logement.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
