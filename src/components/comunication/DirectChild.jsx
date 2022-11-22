import React from "react";


export default props => {

    return(
        <div> 
            <div>
                {props.name} 
                {props.age} 
                {props.nerd ? 'True' : 'False'}! 
            </div>
        </div>
    )
}