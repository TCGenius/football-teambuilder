
import MatchPlayersList from '../components/partido/MatchPlayerList'
import { endpoint } from '@/config/config'

export default async function Partido() {

  const data = await fetch(`${endpoint}/players`, {cache: 'no-store'})
  .then(r => r.json()) //fetch players from API

  return (
    <MatchPlayersList
    data = {data} />
  )
}
