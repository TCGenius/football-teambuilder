import { endpoint } from '@/config/config';
import { PlayerCard } from './PlayerCard';


export default async function PlayersList() {
  
  const data = await fetch(`${endpoint}/players`, {cache: 'no-store'})
  .then(r => r.json()) //fetch players from API
    
// if (isLoading) return (
{/* <div className='flex mx-auto items-center justify-center w-64 h-64'>
  <Spinner label="Cargando jugadores..." color="warning" />
  </div>); //Pasar esto a suspense o loading.js */}
  return (
    <>
    <div className='flex flex-wrap gap-6 justify-center max-w-screen mx-auto p-5'> 
      {data.players.map(player => (
        <PlayerCard key={player.id}
        player={player} />
      ))}
    </div>
    </>
  )
}