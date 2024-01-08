import { endpoint } from '@/config/config';
import MatchSinglePlayer from './MatchSinglePlayer';
import { Chip, ScrollShadow } from '@nextui-org/react';
import NextMatchPlayers from './NextMatchPlayers';
import AddToMatch from './AddToMatch';


export default async function MatchPlayersList() {
  
  const data = await fetch(`${endpoint}/players`, {cache: 'no-store'})
  .then(r => r.json()) //fetch players from API

  const listaPlayers = data.players.filter(e => e.juegaProxPartido == 0)
  const juegaPlayers = data.players.filter(e => e.juegaProxPartido == 1)

    
// if (isLoading) return (
{/* <div className='flex mx-auto items-center justify-center w-64 h-64'>
  <Spinner label="Cargando jugadores..." color="warning" />
  </div>); //Pasar esto a suspense o loading.js */}
  return (
    <div className='flex container items-center justify-center p-4'>
      {/* <div className='flex w-full items-center justify-center gap-4'>
        <AddToMatch />
      </div> */}
      <div className='flex flex-col items-center justify-between basis-1/2 gap-4'>
        <NextMatchPlayers 
        method = {1}
        color='green'
        juegan = {juegaPlayers}/>
        <NextMatchPlayers 
        method = {0}
        color='blue'/>
        <AddToMatch />
      </div>
      <ScrollShadow 
      hideScrollBar
      className='flex flex-wrap gap-4 lg:basis-2/5 max-h-unit-8xl overflow-scroll w-full justify-center mx-auto p-2'> 
        {listaPlayers.map(player => (
          <MatchSinglePlayer 
          key={player.id}
          player={player}
          />
        ))}
      </ScrollShadow>
    </div>
  )
}