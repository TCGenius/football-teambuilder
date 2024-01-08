import Icons from '@/styles/icons';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { PlayerCard } from '../PlayerCard';
import AddToNextMatch from './AddToNextMatch';
import RemoveFromNextMatch from './RemoveFromNextMatch';

export default function MatchSinglePlayer( {player} ) {
  return(
    <div
    className={`flex w-28 h-36 flex-col items-center justify-between shadow-md ${player.juegaProxPartido == 1 ? 'bg-green-400' : 'bg-white'}
    rounded-md p-4 
    ${player.juegaProxPartido == 1 ? 'hover:bg-green-600' : 'hover:bg-gray-200'}`}
    >
      <Popover
      backdrop='blur'>
        <PopoverTrigger>
            <div className='text-black text-xl hover:font-bold cursor-pointer'>
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
      <div className='flex items-center justify-center gap-2'>
        <AddToNextMatch 
        suspended={player.suspension}
        playerId={player.id}/>
        <RemoveFromNextMatch 
        suspended={player.suspension}/>
      </div>
    </div>
  )
}