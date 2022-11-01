

export default function ComParametro(props) {
    const status = props.nota >= 5 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>
                    <h3>
                        {props.aluno} tem nota {props.nota} e está {status}
                    </h3>
                </strong>
            </p>
        </div>
    )
}