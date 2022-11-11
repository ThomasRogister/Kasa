import React from "react";
import "./Home.css";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";
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
        {DataLodgement.map((logement) => (
          <Link className="linkLogement" key={logement.id} to={"/Lodgement/" + logement.id }>
            <Card
              key={logement.id}
              id={logement.id}
              img={logement.cover}
              title={logement.title}
            />
          </Link>
        ))}
      </div>
        <Footer/>
    </div>
  );
}

export default Home;
