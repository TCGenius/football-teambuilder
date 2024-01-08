'use client'
import useSWR from 'swr';
import config from '@/config/config';
import { Card } from './Card';
import { ListItem } from './ListItem';
import Icons from '@/styles/icons';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Checkbox} from "@nextui-org/react";

const fetchPartido = (url) => fetch(url).then((res) => res.json()); // Uso esto para usar SWR y hacerlo reutilizable. Leer más para hacerlo mejor.

export default function GetPartido() {

  const endpoint = config.endpoint;
  const { data, error, isLoading } = useSWR( // useSWR me permite hacer un fetch dentro de un client component.
`${endpoint}/armarEquipos`,
fetchPartido
);
if (error) return 'Ocurrió un error';
if (isLoading) return 'Cargando Equipos...';
  return (
    <div id='divEquipos' className='flex lg:flex-nowrap flex-wrap gap-4 w-full h-screen justify-between py-4'>
      <div id='equipo1' className='bg-red-500 h-max px-2 shadow-md shadow-gray-700 lg:rounded-tr-2xl lg:rounded-br-2xl lg:basis-1/2 basis-full space-y-4 py-4'>
      <h1 className='text-xl text-center uppercase'>Equipo 1</h1>
      {data.equipos.equipo1.map(player => (
            <ListItem key={player} nombre={player.nombre} />
          ))}
      <div className='flex items-center justify-center gap-6'>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.sword} {data.equipos.habilidad1.ataque}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.shield} {data.equipos.habilidad1.defensa}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.footprints} {data.equipos.habilidad1.gambeta}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.football} {data.equipos.habilidad1.pase}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.running} {data.equipos.habilidad1.resistencia}</div>
      </div>
      </div>
      <div id='equipo2' className='bg-blue-500 h-max px-2 shadow-md shadow-gray-700 lg:rounded-tl-2xl lg:rounded-bl-2xl lg:basis-1/2 basis-full space-y-4 py-4'>
      <h1 className='text-xl text-center uppercase'>Equipo 2</h1>
      {data.equipos.equipo2.map(player => (
            <ListItem key={player} nombre={player.nombre} />
          ))}
        <div className='flex items-center justify-center gap-6'>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.sword} {data.equipos.habilidad2.ataque}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.shield} {data.equipos.habilidad2.defensa}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.footprints} {data.equipos.habilidad2.gambeta}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.football} {data.equipos.habilidad2.pase}</div>
        <div className='flex items-center justify-center gap-1 text-xl'>{Icons.running} {data.equipos.habilidad2.resistencia}</div>
      </div>
      </div>
    </div>
  )
}