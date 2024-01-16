'use client'
import Icons from '@/styles/icons';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { PlayerCard } from '../PlayerCard';
import AddToNextMatch from './AddToNextMatch';

export default function MatchSinglePlayer( {player, searchStateHandler} ) {

  return(
    <div
    className='flex w-24 h-36 flex-col items-center justify-between shadow-md bg-white
    rounded-md p-4 hover:bg-gray-200'>
      <Popover
      backdrop='blur'>
        <PopoverTrigger>
            <div className='text-black text-md hover:font-bold cursor-pointer'>
              {player.nombre}
            </div>
        </PopoverTrigger>
        <PopoverContent className='bg-transparent shadow-none'>
          <PlayerCard
          player={player}
          />
        </PopoverContent>
      </Popover>
      <div className={`${player.suspension == 1 ? 'text-red-600' : 'text-transparent'}`}>
        {Icons.flagSolid}
      </div>

        <AddToNextMatch 
        suspended={player.suspension}
        player={player}
        searchStateHandler={searchStateHandler}/>

    </div>
  )
}