import React from "react";
import './carrousel.css'
import { useState } from "react";
import leftArrow from "../../Assets/img/leftArrow.png"
import rightArrow from "../../Assets/img/rightArrow.png"

function Carrousel({pictures}) {
    const [current, setCurrent] = useState(0)
    const carrouselLenght = pictures.lenght

    const nextPict = () => {
        setCurrent(current === carrouselLenght -1 ? 0 : current +1)
    }

    const prevPict = () => {
        setCurrent(current === 0 ? carrouselLenght -1 : current-1)
    }

 return(
    <div className="carrousel">

        {<img onClick={prevPict} className="leftArrow" src={leftArrow} alt="avant"/>}
        {<img onClick={nextPict} className="leftArrow" src={rightArrow} alt="après"/>}

        {pictures.map((picture, i) => {
            return(
                <div className="carrouselPicture">
                <img key={i} className= {i === current ? "carrousel active picture" : "carrousel picture"} src={picture} alt=" " />
                </div> 
                )
        })
    }
    </div>
   )}
 

export default Carrousel