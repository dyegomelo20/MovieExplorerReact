import estrela from "../../../assets/estrela.png"

const Description = ({data}) => {

    const formatminuto = (number) => {
        let minutosCalc = number
        let horasCalc = 0

        while(minutosCalc >= 60) {
            horasCalc++
            minutosCalc = minutosCalc - 60
        }
        return `${horasCalc} Horas ${minutosCalc} minutos`
    }

    const formatDolar = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    if (!data) return <p>Carregando...</p>

  return (
    <div className="description">
        <h1>{data.original_title}</h1>
        <div><img src={estrela} alt="estrela" /><p>{Math.floor(data.vote_average * 10) / 10}</p></div>
        <p>{data.tagline}</p>
        <h2>Orçamento:</h2>
        <p>{formatDolar(data.budget)}</p>
        <h2>Receita:</h2>
        <p>{formatDolar(data.revenue)}</p>
        <h2>Duração:</h2>
        <p>{formatminuto(data.runtime)}</p>
        <h2>Descrição:</h2>
        <p>{data.overview}</p>
    </div>
  )
}

export default Description