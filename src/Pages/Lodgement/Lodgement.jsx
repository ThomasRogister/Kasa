import React from "react";
import { useParams } from "react-router-dom";
import "./Lodgement.css";
import Tags from "../../components/tags/tags";
import Rating from "../../components/rating/rating";
import DataLodgement from "../../Assets/Data/DataLodgement.json";
import Error from "../Error/Error";
import Carrousel from "../../components/Carrousel/carrousel";

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
        <Carrousel slider={pictures} />
        <div className="cardContent">
          <div className="cardInfos">
            <div className="hostInfos">
              <h1 className="cardContentTiltle">{title}</h1>
              <Host host={host} />
            </div>
            <p className="cardContentLocation">{location}</p>
            <div className="tagsLodgement">
            <Tags tags={card?.tags} />
            </div>
            <Rating rating={rating} />
            <DropDown title="Description" content={description} />
            <DropDown title="Équipement" equip={equipments} />
          </div>
        </div>
      </div>
    );
  }
}

export default FindCard;
