import React from "react";
import "./UaoVideo.css";


function UaoVideo() {
    return(
        <div className="o-videoContainer">
        <div className="o-video">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/Pw8U9l8acPA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="o-textoVideo">
            <h1 className="o-tituloVideo">Objetivo General</h1>
            <p className="o-descripcionVieo">Bienvenidos al curso de Desarrollo de Experiencias Multimedia para la Web, aquí contaremos con un espacio donde tendremos disponible contenido relacionado con la asignatura, actividades y retos.</p>
        </div>
        </div>
    );
    
}

export default UaoVideo;