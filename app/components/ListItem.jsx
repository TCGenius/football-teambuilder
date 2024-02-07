'use client'
import { useMatchContext } from '../contexts/MatchContext';
import Icons from '@/styles/icons';


export function ListItem({ nombre, equipo, jugador }) {

  const { playersToTrade, playerTrade } = useMatchContext()

  return(
    <div className={`flex px-4 py-2 rounded-full group w-full gap-2 items-center hover:bg-slate-300
    ${playerTrade.from1to2.id == jugador.id || playerTrade.from2to1.id == jugador.id ? 'bg-gray-400' : 'bg-white'}`}>
        <div className={`hidden 
        ${equipo == 2 ? 'group-hover:block group-hover:w-fit group-hover:h-fit hover:text-blue-600' : '' }`}
        onClick={() => playersToTrade(jugador, equipo)}>
          {Icons.leftArrow}
        </div>
        <div className='text-black w-fit h-fit'>
          {Icons.userCircle}
        </div>
        <div className='text-xl font-medium text-black text-center capitalize w-full'>
            {nombre}
        </div>
        <div className={`hidden
        ${equipo == 1 ? 'group-hover:block group-hover:w-fit group-hover:h-fit hover:text-red-600' : '' }`}
        onClick={() => playersToTrade(jugador, equipo)}>
          {Icons.rightArrow}
        </div>
    </div>
  );
}