import React from "react"

import Primeiro from "./basics/First"
import ComParametro from "./basics/ComParametro"
import Fragment from "./basics/Fragment"

export default () =>

    <div id="app">
        <h1>Fundamentos react</h1>
        <Fragment />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={9.3} />
        <Primeiro />
    </div>
