import React from "react"
import './App.css'
import Card from "./layout/Card"

import StudentList from "./repetition/StudentList"
import Familia from "./basics/Familia"
import FamiliaMembro from "./basics/FamiliaMembro"
import Random from "./basics/Random"
import Primeiro from "./basics/First"
import ComParametro from "./basics/ComParametro"
import Fragment from "./basics/Fragment"

export default () =>

    <div className="App">
        <h1>Fundamentals React</h1>

        <div className="Exercises">
            <Card titulo ="#06 - Repetition" color="FA43200">
                <StudentList></StudentList>
            </Card>

            <Card titulo="#05 - Component's Children" color="#FA60900">
                <Familia surname="Souza">
                    <FamiliaMembro name="Pedro"/>
                    <FamiliaMembro name="Ana"/>
                    <FamiliaMembro name="Gustavo"/>
                </Familia>
    
            </Card>

            <Card titulo="#04 - Random Number" color="#080">
                <Random min={1} max={60}/>
            </Card>
            
            <Card titulo="#03 - Fragment" color="#444888">
                <Fragment />
            </Card>

            <Card titulo="#02 - Component with parameter" color="#DDDD12">    
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
