import React from "react";
import "./UaoCard.css"

function UaoCard() {
    return(
        <div className="o-cardContainer">
            <div className="o-cardImage">
                <img className="o-img" src="https://campus.uaovirtual.edu.co/pluginfile.php/17051/course/overviewfiles/blur-cellphone-close-up-196644.jpg" alt=""/>
            </div>
            <div className="o-cardText">
                <h1 className="o-titleCard">Módulo 1</h1>
                <p className="o-descriptionCard">Introducción al desarrollo web</p>
                 <button className="o-buttonCard">Ir</button>
            </div>
        </div>
    );
    
}

export default UaoCard;