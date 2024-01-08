import Icons from '@/styles/icons';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';

export function PlayerCard({ player }) {

  return(
    <Link href={`/players/${player.id}`}>
      <div className={`${player.invitado ? 'cardInvite' : 'card'}
      flex-col px-4 w-64 h-80 bg-contain space-y-4 bg-opacity-0`}>
          <div className={`h-1/2 w-40 mx-auto flex flex-col items-center justify-center gap-2`}>
            <span className={`uppercase text-xl font-medium text-black pt-10 text-center w-full`}>
              {player.nombre}
            </span>
            <Tooltip
            content={player.juegaProxPartido == 1 ? 'Juega próximo partido' : 'No convocado'}
            placement='bottom'
            showArrow={true}>
              <span className={`${player.juegaProxPartido == 1 ? 'text-green-600' : 'text-gray-800/60'} text-5xl`}>
                {Icons.shoe}
              </span>
            </Tooltip>
            </div>
          <div className='flex flex-wrap-reverse gap-3  text-slate-500 uppercase text-lg px-7 justify-between leading-none'>
            <span className='basis-3/12'>{`def ${player.defensa}`}</span>
            <span className='basis-3/12'>{`pas ${player.pase}`}</span>
            <span className='basis-3/12'>{`gam ${player.gambeta}`}</span>
            <span className='basis-3/12'>{`atq ${player.ataque}`}</span>
            <span className='basis-3/12'>{`res ${player.resistencia}`}</span>
          </div>
      </div>
    </Link>
  );
}