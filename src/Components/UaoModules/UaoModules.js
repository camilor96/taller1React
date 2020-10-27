import React from "react";
import UaoVideo from "./UaoVideo/UaoVideo";
import UaoItems from "./UaoItems/UaoItems";

function UaoModules() {
    return(
        <div className="row">
            <div className="col-12 col-md-6">
                <UaoVideo></UaoVideo>
            </div>
            <div className="col-12 col-md-6">
                <UaoItems></UaoItems>
            </div>
        </div>
    );
    
}

export default UaoModules;