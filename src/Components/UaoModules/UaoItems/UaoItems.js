import React from "react";
import UaoCard from "../UaoCard/UaoCard"
import "./UaoItems.css"

function UaoItems() {
    return(
        <div className="o-uaoItems">
            <UaoCard></UaoCard>
            <UaoCard></UaoCard>
            <UaoCard></UaoCard>

        </div>
    );
    
}

export default UaoItems;