import { useParams } from "react-router-dom"
import Banner from "../components/pages/multi/Banner"
import Description from "../components/pages/multi/Description"
import { useMultiApi } from "../hooks/useApi"
import "./Multi.css"


const Multi = () => {

    const {type, id} = useParams()

    const {data, loading} = useMultiApi(`${type}/${id}`)


  return (
    <div>
        <Banner data={data}/>
        <Description data={data} type={type}/>
    </div>
  )
}

export default Multi