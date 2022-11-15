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
              <div className="titleLocation">
                <h1 className="cardContentTiltle">{title}</h1>
                <p className="cardContentLocation">{location}</p>
                <div className="tagsLodgement">
                  <Tags tags={card?.tags} />
                </div>
              </div>
              <div className="hostStars">
                <Host host={host} />
                <Rating rating={rating} />
              </div>
            </div>
            <div className="dropDownLodgement">
              <div className="dropDownDescri">
                <DropDown title="Description" content={description} />
              </div>
              <div className="dropDownEquipment">
                <DropDown title="Équipement" content={equipments} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindCard;
