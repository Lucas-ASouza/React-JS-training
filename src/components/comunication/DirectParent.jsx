import React from "react";
import DirectChild from "./DirectChild";

export default props => {

    return(
        <div> 
            <DirectChild name="Henrique" age={20} nerd={true}> </DirectChild>
            <DirectChild name="Rafaela" age={13} nerd={false}> </DirectChild>
        </div>
    )
}