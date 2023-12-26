import Link from 'next/link';

export function PlayerCard({ player }) {

  return(
    <Link href={`/players/${player.id}`}>
      <div className={`${player.invitado ? 'cardInvite' : 'card'}
      flex-col px-4 w-64 h-80 bg-contain space-y-4 bg-opacity-0`}>
          <div className={`text-xl h-1/2 font-medium text-black pt-10 text-center w-40 mx-auto`}>
            <span className={`uppercase`}>
              {player.nombre}
            </span></div>
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