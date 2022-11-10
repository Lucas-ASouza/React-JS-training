import React from "react";
import studants from "../../data/studants.js";

export default props => {
    const studantLI = studants.map((studant) =>{
        return (
            <li key={studant.id}>
                {studant.id} {studant.name} {studant.grade}
            </li>
        );
    });

    return (
        <div>
            <ul style={{listStyle: "none"}}>{studantLI}</ul>
        </div>
    );
};