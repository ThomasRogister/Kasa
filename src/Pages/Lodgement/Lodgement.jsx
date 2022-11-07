import React from "react";
import { useParams } from "react-router-dom";
import "./Lodgement.css";
import Tags from "../../components/tags/tags";
import DataLodgement from "../../Assets/Data/DataLodgement.json";

function FindCard() {
  const params = useParams()
  return(
     DataLodgement.filter((card) => card.id === params.id)
     )
   
  }