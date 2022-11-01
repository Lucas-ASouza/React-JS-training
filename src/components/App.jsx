import React from "react"
import './App.css'
import Card from "./layout/Card"
import Random from "./basics/Random"
import Primeiro from "./basics/First"
import ComParametro from "./basics/ComParametro"
import Fragment from "./basics/Fragment"

export default () =>

    <div className="App">
        <h1>Fundamentos react</h1>

        <div className="Exercises">

            <Card titulo="#04 - Random Number" color="#080">
                <Random min={1} max={60}/>
            </Card>
            
            <Card titulo="#03 - Fragment" color="#444888">
                <Fragment />
            </Card>

            <Card titulo="#02 - Component with parameter" color="#DDDD12
">    
                <ComParametro
                    titulo="Studant Situation"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>

            <Card titulo="#01 - First Component">  
                <Primeiro />
            </Card>
        </div>

    </div>
