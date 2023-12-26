'use client'
import { CircularProgress, Image, Tooltip } from '@nextui-org/react';
import { useState } from 'react';
import Icons from '@/styles/icons'

export default function CardOnePlayer( { player } ) {

const [rotate, setRotate] = useState(false)

  return(
    <div className={`w-full lg:w-3/5 max-w-lg flip-card cursor-pointer
    ${rotate ? 'rotated' : ''}`}
    onClick={() => setRotate(!rotate)}>
      <div className='flip-card-inner w-full h-full relative text-center '>
        <div className={`flip-card-front absolute h-72 w-full flex gap-4 p-4 items-center rounded-lg bg-gray-100 shadow-lg shadow-yellow-800`}
        >
          <div className='flex flex-col items-center justify-center gap-3'>
            <div className='w-40 h-40 overflow-hidden rounded-lg bg-slate-400/60'>
              <Image 
              className='w-40' 
              height={170}
              width={170}
              isZoomed
              alt={player.nombre} 
              src={`/img/${player.nombre}.png`}
              fallbackSrc='/img/no-profile-picture-icon.png'
              />
            </div>
              <div className='flex gap-2 items-center justify-center'>
                <Tooltip
                content={
                  player.invitado ? 'Este jugador es un invitado'
                  : 'Este jugador forma parte de la empresa'}
                placement='bottom'
                showArrow>
                  <p className={`${player.invitado ? '' : 'text-blue-600'}`}>{player.invitado ? Icons.twoUsers : Icons.checkBadge}</p>
                </Tooltip>
                <Tooltip
                content={
                  player.suspension ? 'Jugador suspendido'
                  : 'Habilitado para jugar'}
                placement='bottom'
                showArrow>
                <p className={`${player.suspension ? 'text-red-600' : 'text-green-600'}`}>{player.suspension ? Icons.flagSolid : Icons.flag}</p>
                </Tooltip>
              </div>
          </div>
          <div className='flex flex-col w-full items-center justify-center border-l-1 border-gray-400 gap-2 pl-4 py-3 h-full'>
            <div className='w-full border-b-2 border-gray-600 text-center mb-3'>
              <h1 className='font-bold text-2xl '>{player.nombre}</h1>
            </div>
            <div className='flex justify-between w-2/3 items-center border-b-1 border-gray-500'>
              <h1 className='font-bold text-md'>Ataque: </h1>
              <p>{player.ataque}</p>
            </div>
            <div className='flex justify-between w-2/3 items-center border-b-1 border-gray-500'>
              <h1 className='font-bold text-md'>Defensa: </h1>
              <p>{player.defensa}</p>
            </div>
            <div className='flex justify-between w-2/3 items-center border-b-1 border-gray-500'>
              <h1 className='font-bold text-md'>Gambeta: </h1>
              <p>{player.gambeta}</p>
            </div>
            <div className='flex justify-between w-2/3 items-center border-b-1 border-gray-500'>
              <h1 className='font-bold text-md'>Pase: </h1>
              <p>{player.pase}</p>
            </div>
            <div className='flex justify-between w-2/3 items-center border-b-1 border-gray-500'>
              <h1 className='font-bold text-md'>Resistencia: </h1>
              <p>{player.resistencia}</p>
            </div>
          </div>
        </div>
        <div className='flip-card-back absolute h-72 w-full flex gap-4 p-4 items-center rounded-lg bg-blue-200 shadow-lg shadow-yellow-800'>
          <div className='w-40 flex flex-col items-center justify-center gap-3'>
            <h1>Porcentaje de victorias</h1>
            <CircularProgress
            size='lg'
            value={player.porcentaje}
            color={player.porcentaje < 45 ? 'danger' : ( player.porcentaje >= 45 && player.porcentaje < 60 ? 'warning' : 'success')}
            showValueLabel={true}
            classNames={{
              svg: 'w-36 h-36',
              value: 'text-3xl',
              track: 'stroke-white/60'
            }}
            />
          </div>
          <div className='flex flex-col w-full items-center justify-center border-l-1 border-gray-400 gap-2 pl-4 py-3 h-full'>
            <div className='flex justify-between w-2/3 items-center border-b-1 border-gray-500'>
              <h1 className='font-bold text-md'>Cantidad de partidos: </h1>
              <p>{player.partidos}</p>
            </div>
            <div className='flex justify-between w-2/3 items-center border-b-1 border-gray-500'>
              <h1 className='font-bold text-md'>Victorias: </h1>
              <p>{player.ganados}</p>
            </div>
            <div className='flex justify-between w-2/3 items-center border-b-1 border-gray-500'>
              <h1 className='font-bold text-md'>Derrotas: </h1>
              <p>{player.perdidos}</p>
            </div>
            <div className='flex justify-between w-2/3 items-center border-b-1 border-gray-500'>
              <h1 className='font-bold text-md'>MVPs: </h1>
              <p>{player.mvps}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
