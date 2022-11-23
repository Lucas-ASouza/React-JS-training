import "./Input.css"
import React, { useState } from "react";

export default props => {

    const [value, setValue] = useState('Initial')

    function whenChange(e) {
        setValue(e.target.value)
    }
    return (
        <div className="Input">
            <h2>{value}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <input value={value} onChange={whenChange} />
                <input value={value} readOnly />
                <input value={undefined} />
            </div>
        </div>
    )

    /* all that to make a component that we can alter in the front end
    1º controled Component
    2º Without the function, a controlled component that can't be controlled
    3º a free component, not bound to any state*/
}