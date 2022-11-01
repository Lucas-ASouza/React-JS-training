

export default function ComParametro(props) {
    const status = props.nota >= 5 ? 'Aproved' : 'Reproved'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <h3>
                    {props.aluno}´s grades are {props.nota} and therefore is {status}
                </h3>
                
            </p>
        </div>
    )
}