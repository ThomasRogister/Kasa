import React from "react";
import'./equipement.css'

function Equipement({ equipements }) {
    return(
        equipements.map((equipement) => (
          <li className="equipement">{equipement}</li>
      ))
    )
  }
  
  export default Equipement;