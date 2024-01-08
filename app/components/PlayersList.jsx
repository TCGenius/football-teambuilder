import { endpoint } from '@/config/config';
import { PlayerCard } from './PlayerCard';
import { ScrollShadow } from '@nextui-org/react';


export default async function PlayersList() {
  
  const data = await fetch(`${endpoint}/players`, {cache: 'no-store'})
  .then(r => r.json()) //fetch players from API

  // const filteredplayers = data.players.filter(player => player.juegaProxPartido == 1)

    
// if (isLoading) return (
{/* <div className='flex mx-auto items-center justify-center w-64 h-64'>
  <Spinner label="Cargando jugadores..." color="warning" />
  </div>); //Pasar esto a suspense o loading.js */}
  return (
    <>
    <ScrollShadow className='flex flex-wrap gap-6 justify-center max-w-screen mx-auto p-5 overflow-scroll h-screen'
    hideScrollBar> 
      {data.players.map(player => (
        <PlayerCard key={player.id}
        player={player} />
      ))}
    </ScrollShadow>
    </>
  )
}