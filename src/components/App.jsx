import React from "react"
import './App.css'
import Card from "./layout/Card"

import Input from "./form/Input"
import IndirectChild from "./comunication/IndirectChild"
import DirectParent from "./comunication/DirectParent"
import UserInfo from "./conditional/UserInfo"
import EvenOrOdd from "./conditional/EvenOrOdd"
import ProductTable from "./repetition/ProductTable"
import StudentList from "./repetition/StudentList"
import Familia from "./basics/Familia"
import FamiliaMembro from "./basics/FamiliaMembro"
import Random from "./basics/Random"
import Primeiro from "./basics/First"
import ComParametro from "./basics/ComParametro"
import Fragment from "./basics/Fragment"
import IndirectParent from "./comunication/IndirectParent"

export default () =>

    <div className="App">
        <h1>Fundamentals React</h1>

        <div className="Exercises">
        <Card titulo ="#11 - Controlled Component" color="#E45F56">
            <Input></Input>
        </Card>

        <Card titulo ="#10 - Indirect Comunication" color="#8BAD39">
            <IndirectParent></IndirectParent>
        </Card>

        <Card titulo ="#09 - Direct Comunication" color="#182943">
            <DirectParent></DirectParent>
        </Card>
   
        <Card titulo ="#08 - Conditional Render" color="#982395">
            <EvenOrOdd number="2"></EvenOrOdd>
            <UserInfo user={{ name: 'Afonso' }}/>
        </Card>

        <Card titulo ="#07 - Repetition Chalenge" color="#3A9AD9">
            <ProductTable></ProductTable>
        </Card>

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
