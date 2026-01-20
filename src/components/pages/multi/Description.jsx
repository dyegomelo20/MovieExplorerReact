import estrela from "../../../assets/estrela.png"
import CustomButton from "../../global/CustomButton"
import { useState } from "react"

const Description = ({data, type}) => {

    const [openSeasonId, setOpenSeasonId] = useState(null);

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
    <div className={`description ${type}` } >
        {type === "movie" && (
        <>
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
        <p>{!data.overview ? "Sem Sinopse" : data.overview}</p>
        </>
        )}
        {type === "tv" && (
            <>
            <h1>{data.name}</h1>
             <div className="classificacao"><img src={estrela} alt="estrela" /><p>{Math.floor(data.vote_average * 10) / 10}</p></div>
            <p>{data.tagline}</p>
            <h2>Generos:</h2>
            <div className="generos">
                {data.genres.map(g => (
                    <span key={g.id}>{g.name}</span>
                ))}
            </div>
            <h2>Sinopse:</h2>
            <p>{data.overview === "" ? "Sem Sinopse" : data.overview}</p>
            <h2>Temporadas:</h2>
            <p>{data.number_of_seasons}</p>
            <h2>Episódios Total:</h2>
            <p>{data.number_of_episodes}</p>
            <div className="sessao">
                {data.seasons.map((season) => {
                const isOpen = openSeasonId === season.id;

                return (
                    <div key={season.id} className={`${isOpen ? "exibir" : ""}`}>
                    <h3>{season.name}</h3>
                    <p>Episódios: {season.episode_count}</p>
                    <p>Lancamento:{season.air_date}</p>
                    <p>{season.overview}</p>

                    <CustomButton className="btn-exibir" onClick={() => setOpenSeasonId(isOpen ? null : season.id)}>
                        {isOpen ? "exibir menos" : "exibir mais"}
                    </CustomButton>
                    </div>
                );
                })}


            </div>
            </>
        )}
    </div>
  )
}

export default Description