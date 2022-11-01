import React from "react";

export default (props) => {

const { min, max } = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Random Number</h2>
            <p>
                <strong>Minimum value:</strong> {min}

            </p>
            <p>
                <strong>Maximum Value:</strong> {max}
            </p>
            <p>
                <strong>Chosen Value:</strong> {aleatorio}
            </p>
        </div>
    )
}