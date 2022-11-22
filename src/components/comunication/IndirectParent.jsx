import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

export default props => {
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    
    function getInformation(name, age, nerd) {
        setName(name)
        setAge(age)
        setNerd(nerd)

    }

    return(
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age}</strong></span>
                <span>{nerd ? ' and is a True nerd' : ' and is Not a nerd'}</span>
            </div>
            <IndirectChild onClick={getInformation}></IndirectChild>
        </div>
    )
}