import {Link, useParams} from "react-router-dom";
import {adidasArr} from "./Adidas.tsx";
import {pumaArr} from "./Puma.tsx";


export const Model = () => {
  let params =  useParams<{ model: string, id: string }>() as { model: string, id: string }
  const model = params.model === 'adidas' ? adidasArr : pumaArr
  return (
    <div style={{paddingLeft: '30px'}}>
      <h3>{model[+params.id].model}</h3>
      <p>{model[+params.id].price}</p>

      <img
        src={model[+params.id].picture}
        alt={model[+params.id].model}
        width="400"
        height="400"
        loading="lazy"
      />
      <p>{model[+params.id].description}</p>
      <Link to={`/${params.model}`}>Назад</Link>

    </div>
  )
}