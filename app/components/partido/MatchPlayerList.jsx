'use client'

import MatchSinglePlayer from './MatchSinglePlayer';
import { Input, ScrollShadow } from '@nextui-org/react';
import NextMatchPlayers from './NextMatchPlayers';
import AddToMatch from './AddToMatch';
import { useState } from 'react';
import Icons from '@/styles/icons';


export default function MatchPlayersList( {data} ) {
  const [playerSearch, setPlayerSearch] = useState('')
  const handleSearchState = () => {
    setPlayerSearch('')
  }

  const listaPlayers = data.players.filter(e => e.juegaProxPartido == 0)
  const juegaPlayers = data.players.filter(e => e.juegaProxPartido == 1)

  const filteredPlayers = listaPlayers.filter(e => e.nombre.toUpperCase().includes(playerSearch.toUpperCase())) //We transform everything to Uppercase so we can filter case insensitive

  return (
    <div className='flex container items-center justify-center px-4 pb-4 pt-20'>

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
      <div className='flex flex-col items-center justify-center lg:basis-2/5 h-unit-8xl gap-4'>
        <div className='h-16 w-1/2 flex items-center justify-center'>
          <Input 
          startContent={Icons.searchPlayer}
          placeholder='Busca un jugador...'
          value={playerSearch}
          onChange={(e) => setPlayerSearch(e.target.value)}/>
        </div> 
        <ScrollShadow 
        hideScrollBar
        className='flex flex-wrap gap-4 overflow-scroll w-full h-full justify-center items-start p-2'> 
          {filteredPlayers.map(player => (
            <MatchSinglePlayer 
            key={player.id}
            player={player}
            searchStateHandler={handleSearchState}
            />
          ))}
        </ScrollShadow>
      </div>
    </div>
  )
}