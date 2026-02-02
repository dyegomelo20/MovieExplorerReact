import "./ModalTrailer.css"
import { useMultiApi } from "../../../hooks/useApi"
import { useEffect, useState } from "react"
import CustomButton from "../../global/CustomButton"

const ModalTrailer = ({id, type, ativo, onClose}) => {
    const {data} = useMultiApi(`${type}/${id}/videos`)
    
    const [trailer, setTrailer] = useState(null)
    const [counte, setCounte] = useState(0)

    useEffect(() => {
    if (data?.results?.length > 0) {
      setTrailer(data.results[counte])
    }else if (data && data.results?.length === 0) {
      alert("Trailer não disponível")
      onClose()
    }
    }, [data, counte])

    if (!trailer) return null

  return (
    <div className='overlay' onClick={onClose}>
        <div className={`modal ${ativo}`} onClick={(e) => e.stopPropagation()}>
            <iframe  src={`https://www.youtube.com/embed/${trailer.key}`} frameBorder="1" ></iframe>
            <div className="btn-trailer">
              <CustomButton onClick={() => setCounte(counte - 1)} disabled={counte === 0}>Anterior</CustomButton>
              <CustomButton onClick={() => setCounte(counte + 1)} disabled={counte === data?.results?.length - 1}>Próximo</CustomButton>
            </div>
        </div>
    </div>
  )
}

export default ModalTrailer