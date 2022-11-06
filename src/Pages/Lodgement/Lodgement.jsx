import React from 'react'
import './Lodgement.css'
import Header from '../../components/Main/Header';
import Banner from "../../components/Banner/Banner";
import backgroundLodgement from "../../Assets/img/backgroundLodgement.png";


function Lodgement() {
    return(
        <div className='Lodgement'>
            <Header/>
            <Banner text={''} img={backgroundLodgement} />
            <h1> Lodgement Kasa</h1>
        </div>
    )
}

export default Lodgement