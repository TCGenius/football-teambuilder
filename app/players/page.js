import PlayersList from '@/app/components/PlayersList'
import { endpoint } from '@/config/config'

export default async function Players() {

  const data = await fetch(`${endpoint}/players`, {cache: 'no-store'})
  .then(r => r.json())  //fetch players from API

  return (
      <PlayersList 
      data = {data}/>
  )
}
