'use client'

import { useState } from 'react';
import { ListItem } from './ListItem';
import Icons from '@/styles/icons';
import { useMatchContext } from '../contexts/MatchContext';
import { Button } from '@nextui-org/react';

export default function GetPartido( {data} ) {

  const {playerTrade, setPlayerTrade} = useMatchContext()
  const [equipo1, setEquipo1] = useState(data.equipos.equipo1)
  const [equipo2, setEquipo2] = useState(data.equipos.equipo2)
  const atq1 = equipo1.reduce((total, next) => total + next.ataque, 0) / equipo1.length
  const def1 = equipo1.reduce((total, next) => total + next.defensa, 0) / equipo1.length
  const gam1 = equipo1.reduce((total, next) => total + next.gambeta, 0) / equipo1.length
  const pas1 = equipo1.reduce((total, next) => total + next.pase, 0) / equipo1.length
  const res1 = equipo1.reduce((total, next) => total + next.resistencia, 0) / equipo1.length
  const atq2 = equipo2.reduce((total, next) => total + next.ataque, 0) / equipo2.length
  const def2 = equipo2.reduce((total, next) => total + next.defensa, 0) / equipo2.length
  const gam2 = equipo1.reduce((total, next) => total + next.gambeta, 0) / equipo2.length
  const pas2 = equipo1.reduce((total, next) => total + next.pase, 0) / equipo2.length
  const res2 = equipo2.reduce((total, next) => total + next.resistencia, 0) / equipo2.length

  const tradeHandler = () => {
    const from1to2 = playerTrade.from1to2
    const from2to1 = playerTrade.from2to1
    if (playerTrade.from1to2.id && playerTrade.from1to2.id) {
      let equipo1Spread = [...equipo1]
      let equipo2Spread = [...equipo2]
      // equipo1Spread.push(from2to1)
      const player1toRemove = equipo1.indexOf(from1to2)
      equipo1Spread.splice(player1toRemove, 1, from2to1) //This way we remove player by their index
      // equipo2Spread.push(from1to2)
      const player2toRemove = equipo2.indexOf(from2to1)
      equipo2Spread.splice(player2toRemove, 1, from1to2) //This way we remove player by their index
      setEquipo1(equipo1Spread)
      setEquipo2(equipo2Spread)
    }
  }


  return (
    <div id='divEquipos' className='flex lg:flex-nowrap flex-wrap gap-4 w-full h-screen justify-between pt-20 pb-4 px-4'>
      <div id='equipo1' className='bg-red-500 h-max px-2 shadow-md shadow-gray-700 lg:rounded-tr-2xl lg:rounded-br-2xl lg:basis-1/2 basis-full space-y-4 py-4'>
      <h1 className='text-xl text-center uppercase'>Equipo 1</h1>
      {equipo1.map(player => (
            <ListItem key={player.id} nombre={player.nombre} equipo={1} jugador={player} />
          ))}
      <div className='flex items-center justify-center gap-6'>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.sword} {atq1}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.shield} {def1}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.footprints} {gam1}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.football} {pas1}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.running} {res1}</div>
      </div>
      </div>
      <Button
      isDisabled={playerTrade.from1to2.id && playerTrade.from2to1.id ? false : true}
      color='primary'
      onClick={() => tradeHandler()}
      >
        Intercambiar
      </Button>
      <div id='equipo2' className='bg-blue-500 h-max px-2 shadow-md shadow-gray-700 lg:rounded-tl-2xl lg:rounded-bl-2xl lg:basis-1/2 basis-full space-y-4 py-4'>
      <h1 className='text-xl text-center uppercase'>Equipo 2</h1>
      {equipo2.map(player => (
            <ListItem key={player.id} nombre={player.nombre} equipo={2} jugador={player} />
          ))}
        <div className='flex items-center justify-center gap-6'>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.sword} {atq2}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.shield} {def2}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.footprints} {gam2}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.football} {pas2}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.running} {res2}</div>
      </div>
      </div>
    </div>
  )
}