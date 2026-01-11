import { useRouteError } from "react-router-dom"

const ErrorPages = () => {
    const error = useRouteError()
 
  return (
    <div>
        <h1>Ops</h1>
        <p>temos um problemar</p>
        <p>{error.statusText}</p>
        <p>{error.error.message}</p>
    </div>
  )
}

export default ErrorPages