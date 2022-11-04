import React from "react";
import "./Home.css";
import Header from "../../components/Main/Header";
import DataLodgement from "../../Assets/Data/DataLodgement.json";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <div className="Home">
      <Header />
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
