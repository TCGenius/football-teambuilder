import GetPartido from '../../components/GetPartido'
import { endpoint } from '@/config/config'



export default async function PartidoActual() {

  const data = await fetch(`${endpoint}/armarEquipos`, {cache: 'no-store'})
  .then(r => r.json()) //fetch players from API

  return (
    <GetPartido
    data = {data} />
  )
}
