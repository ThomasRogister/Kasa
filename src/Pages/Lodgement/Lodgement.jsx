import React from "react";
import { useParams } from "react-router-dom";
import "./Lodgement.css";
import Tags from "../../components/tags/tags";
import Rating from "../../components/rating/rating";
import DataLodgement from "../../Assets/Data/DataLodgement.json";
import Error from "../Error/Error";
import Carrousel from "../../components/Carrousel/carrousel";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";
import DropDown from "../../components/dropDown/dropDown";
import Host from "../../components/host/host";

function FindCard() {
  const params = useParams();
  console.log(params);
  const card = DataLodgement.find((card) => card.id === params.id);
  const { title, location, rating, host, equipments, description, pictures } =
    card || {};

  if (!card) {
    return <Error />;
  } else {
    return (
      <div className="lodgementCard">
        <Header />
        <Carrousel slider={pictures}/>
        <div className="cardContent">
          <div className="cardInfos">
            <h1 className="cardContentTiltle">{title}</h1>
            <p className="cardContentLocation">{location}</p>
            <Host host={host} />
            <Tags tags={card?.tags} />
            <Rating rating={rating} />
            <DropDown title="Description" content={description} />
            <DropDown title="Équipement" equip={equipments} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default FindCard;
