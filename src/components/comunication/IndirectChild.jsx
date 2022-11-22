import React from "react";

export default props => {
    const cb = props.onClick

    return(
        <div> 
            <div>
                Child
            </div>
            <button onClick={_ => cb('John', 42, true)}>
                Get Information
            </button>
        </div>
    )
}