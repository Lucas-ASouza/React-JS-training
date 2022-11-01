import React from "react"

import Card from "./layout/Card"
import Random from "./basics/Random"
import Primeiro from "./basics/First"
import ComParametro from "./basics/ComParametro"
import Fragment from "./basics/Fragment"

export default () =>

    <div id="app">
        <h1>Fundamentos react</h1>
        <Card titulo="Exemplo de Card"></Card>

        <Card titulo="#04 - Random Number">
            <Random min={1} max={60}/>
        </Card>
        
        <Card titulo="#03 - Fragment">
            <Fragment />
        </Card>

        <Card titulo="#02 - Component with parameter">    
            <ComParametro
                titulo="Studant Situation"
                aluno="Pedro"
                nota={9.3} />
        </Card>

        <Card titulo="#01 - First Component">  
            <Primeiro />
        </Card>
    </div>
