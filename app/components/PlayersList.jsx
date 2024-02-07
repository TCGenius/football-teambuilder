'use client'
import Icons from '@/styles/icons';
import { PlayerCard } from './PlayerCard';
import { Input, ScrollShadow } from '@nextui-org/react';
import { useState } from 'react';


export default function PlayersList( {data} ) {
  
  const [playerSearch, setPlayerSearch] = useState('')
  const players = data.players
  const filteredPlayers = players.filter(e => e.nombre.toUpperCase().includes(playerSearch.toUpperCase())) //We transform everything to Uppercase so we can filter case insensitive

  return (
    <div className='flex flex-col gap-6 justify-center items-center max-w-screen mx-auto px-5 pb-5 h-screen pt-20'>
      <div className='h-16 w-1/2 flex items-center justify-center'>
        <Input 
        startContent={Icons.searchPlayer}
        placeholder='Busca un jugador...'
        onChange={(e) => setPlayerSearch(e.target.value)}/>
      </div>
      <ScrollShadow className='flex flex-wrap gap-6 justify-center max-w-screen mx-auto p-4 overflow-y-scroll h-full'> 
        {filteredPlayers.map(player => (
          <PlayerCard key={player.id}
          player={player} />
        ))}
      </ScrollShadow>
    </div>
  )
}