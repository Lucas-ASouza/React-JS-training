import React from "react";

export default props => {
    const cb = props.onClick
    const min = 30
    const max = 70
    const generateAge = () => parseInt(Math.random() * (max-min) + min) /*generate random age*/
    const generateNerd = () => Math.random() > 0.5 /*generate random Boolean */
    return(
        <div> 
            <div>
                Child
            </div>
            <button onClick={_ => cb('John', generateAge, generateNerd)}>
                Get Information
            </button>
        </div>
    )
}