import React from "react";
import { useParams } from "react-router-dom";
import "../../style/style.css";
import Tags from "../../components/tags/tags";
import Rating from "../../components/rating/rating";
import dataLodgement from "../../assets/data/dataLodgement.json";
import Error from "../error/error";
import Carrousel from "../../components/carousel/carousel";
import DropDown from "../../components/dropDown/dropDown";
import Host from "../../components/host/host";

function FindCard() {
  const params = useParams();
  console.log(params);
  const card = dataLodgement.find((card) => card.id === params.id);
  const { title, location, rating, host, description, pictures } = card || {};

  const equipments = card.equipments.map((equip) => {
    return <li className="lodgement__equipment">{equip}</li>;
  });

  if (!card) {
    return <Error />;
  } else {
    return (
      <div className="lodgement">
        <Carrousel slider={pictures} />
        <div className="lodgement__content">
          <div className="lodgement__infos">
            <div className="lodgement__host">
              <div className="lodgement__title_location">
                <h1 className="lodgement__title">{title}</h1>
                <p className="lodgement__location">{location}</p>
                <div className="lodgement__tags">
                  <Tags tags={card?.tags} />
                </div>
              </div>
              <div className="lodgement__host_stars">
                <Host host={host} />
                <Rating rating={rating} />
              </div>
            </div>
            <div className="lodgement__dropDown">
              <div className="lodgement__description_content">
                <DropDown title="Description" content={description} />
              </div>
              <div className="lodgement__equipment_content">
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
