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
    <div id='divEquipos' className='flex space-x-4 w-screen h-screen justify-between py-4'>
      <div id='equipo1' className='bg-red-500 h-max px-2 shadow-md shadow-gray-700 rounded-tr-2xl rounded-br-2xl basis-1/2 space-y-4 py-4'>
      <h1 className='text-xl text-center uppercase'>Equipo 1</h1>
      {data.equipos.equipo1.map(player => (
            <ListItem key={player} nombre={player} />
          ))}
      </div>
      <div id='equipo2' className='bg-blue-500 h-max px-2 shadow-md shadow-gray-700 rounded-tl-2xl rounded-bl-2xl basis-1/2 space-y-4 py-4'>
      <h1 className='text-xl text-center uppercase'>Equipo 2</h1>
      {data.equipos.equipo2.map(player => (
            <ListItem key={player} nombre={player} />
          ))}
      </div>
    </div>
  )
}