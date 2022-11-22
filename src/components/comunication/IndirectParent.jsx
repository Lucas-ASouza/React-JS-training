import React from "react";
import IndirectChild from "./IndirectChild";

export default props => {
    
    function getInformation(name, age, nerd) {
        console.log(name, age, nerd)
    }

    return(
        <div>
            Parent

            <IndirectChild onClick={getInformation}>

            </IndirectChild>
        </div>
    )
}