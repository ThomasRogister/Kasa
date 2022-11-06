import React from "react";
import "./Home.css";
import Header from "../../components/Main/Header";
import DataLodgement from "../../Assets/Data/DataLodgement.json";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import backgroundHome from "../../Assets/img/backgroundHome.png";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner text={"Chez vous, partout et ailleurs"} img={backgroundHome} />
      <div className="liste-logements">
        {DataLodgement.map((lodgement) => (
          <Link key={lodgement.id} to={"/DataLodgement/" + lodgement.id}>
            <Card
              key={lodgement.id}
              id={lodgement.id}
              img={lodgement.cover}
              titre={lodgement.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
