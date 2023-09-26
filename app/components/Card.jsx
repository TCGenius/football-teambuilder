import Image from 'next/image'
import { Button } from '@nextui-org/react';


export function Card({ ataque, nombre, pase, defensa, resistencia, gambeta, id, fetchOpen, invitado, openPlayer, details, setCardName}) {

  return(
    <div className={`${invitado ? 'cardInvite' : 'card'}
    flex-col px-4 w-64 h-80 bg-contain space-y-4 bg-opacity-0 
    ${details == 1 ? '' : 'cursor-pointer'}`} disableAnimation={true}
    onClick={ () => {
      setCardName(id);
      openPlayer();
      fetchOpen();
      }}>
        <div className='text-xl h-1/2 font-medium  text-black pt-10 text-center'>
          <span className='uppercase'>
            {nombre}
          </span></div>
        <div className='flex flex-wrap-reverse gap-3  text-slate-500 uppercase text-lg px-7 justify-between leading-none'>
          <span className='basis-3/12'>{`def ${defensa}`}</span>
          <span className='basis-3/12'>{`pas ${pase}`}</span>
          <span className='basis-3/12'>{`gam ${gambeta}`}</span>
          <span className='basis-3/12'>{`atq ${ataque}`}</span>
          <span className='basis-3/12'>{`res ${resistencia}`}</span>
        </div>
    </div>
  );
}