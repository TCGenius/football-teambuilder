import { endpoint } from '@/config/config';
import Icons from '@/styles/icons';
import MatchSinglePlayer from './MatchSinglePlayer';
import AddToMatch from './AddToMatch';


export default async function MatchPlayersList() {
  
  const data = await fetch(`${endpoint}/players`, {cache: 'no-store'})
  .then(r => r.json()) //fetch players from API
    
// if (isLoading) return (
{/* <div className='flex mx-auto items-center justify-center w-64 h-64'>
  <Spinner label="Cargando jugadores..." color="warning" />
  </div>); //Pasar esto a suspense o loading.js */}
  return (
    <div className='flex flex-col container items-center justify-center p-4'>
      <div className='flex w-full items-center justify-center gap-4'>
        <AddToMatch />
      </div>
      <div className='flex flex-wrap gap-4 w-full justify-center mx-auto p-2'> 
        {data.players.map(player => (
          <MatchSinglePlayer 
          key={player.id}
          player={player}
          />
        ))}
      </div>
    </div>
  )
}