import React from "react";
import { useParams } from "react-router-dom";
import "./Lodgement.css";
import Tags from "../../components/tags/tags";
import DataLodgement from "../../Assets/Data/DataLodgement.json";
import Error from "../Error/Error";
import Carrousel from "../../components/Carrousel/carrousel";
import Header from "../../components/Main/Header";
import DropDown from "../../components/dropDown/dropDown";
import Equipement from "../../components/equipement/equipement";

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
        <Carrousel />
        <div className="cardContent">
          <div className="cardInfos">
            <h1 className="cardContentTiltle">{title}</h1>
            <p className="cardContentLocation">{location}</p>
            <div className="cardContentTags">
              <Tags tags={card?.tags} /> 
            </div>
            <DropDown
              title="Description"
              content="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
            />
            <DropDown
              title="Équipement"
              content= {<Equipement equipement={card?.equipements}/>}/>
          </div>
        </div>

        {/* <div className="cardRating&Host">         
          
        </div> */}
      </div>
    );
  }
}
export default FindCard;
