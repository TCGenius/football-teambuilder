'use client'
import React, { isValidElement, useState } from "react";
import useSWR from 'swr';
import config from '@/config/config';
import { Card } from './Card';
import Icons from '@/styles/icons';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Checkbox} from "@nextui-org/react";

const fetchPlayers = (url) => fetch(url).then((res) => res.json()); // Uso esto para usar SWR y hacerlo reutilizable. Leer más para hacerlo mejor.

var myHeaders = new Headers(); //Desde acá hasta GetPlayers(), totalmente robado de Postman
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({
  "player": {
    "nombre": "el guachin",
    "ataque": 5,
    "defensa": 5,
    "gambeta": 5,
    "pase": 5,
    "resistencia": 5,
    "invitado": 1
  }
});
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
export default function GetPlayers() {
  const [atq, setAtq] = useState(5)
  const validateAtq = (atq) => atq > 10 || atq < 1 ? false : true
    const validationState = React.useMemo(() => {
    return validateAtq(atq) ? "valid" : "invalid";
  }, [atq]);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const endpoint = config.endpoint;
  const { data, error, isLoading } = useSWR( // useSWR me permite hacer un fetch dentro de un client component.
`${endpoint}/players`,
fetchPlayers
);
if (error) return 'Ocurrió un error';
if (isLoading) return 'Cargando Jugadores...';
  return (
    <>
    <div className='flex flex-wrap gap-6 justify-center max-w-screen-lg mx-auto p-5 rounded-lg my-4'> 
          {data.players.map(player => (
            <Card key={player.id} invitado={player.INVITADO} ataque={player.ATAQUE} pase={player.PASE} gambeta={player.GAMBETA} defensa={player.DEFENSA} resistencia={player.RESISTENCIA} nombre={player.NOMBRE} />
          ))}
          <Button onPress={onOpen} disableRipple='1'
          /*onClick={ 
            () => {fetch(`${endpoint}/agregarPlayer`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}} */ 
            className='bg-opacity-0 cardNew w-64 h-80 bg-contain flex justify-center items-center group'>
            <div className='transition-all group-hover:rotate-180 duration-300 text-gray-600 group-hover:text-yellow-600 group-hover:text-opacity-100 w-28 text-opacity-50'>{Icons.plusCircle}</div>
          </Button>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Agregar jugador</ModalHeader>
              <ModalBody>
                <form className='flex w-full flex-wrap gap-4'>
                  <Input className='' label='Nombre' type='text' labelPlacement='outside'/>
                  <Input className='basis-1/4' label='Ataque' isRequired type='number' defaultValue={atq} 
                  color={validationState === "invalid" ? "danger" : "success"}
                  errorMessage={validationState === "invalid" && "Ingrese un valor de 1 a 10"}
                  onValueChange={setAtq} 
                  validationState={validationState}
                  />
                  <Input className='basis-1/4' defaultValue={5} label='Defensa' placeholder='Defensa' isRequired type='number' />
                  <Input className='basis-1/4' defaultValue={5} label='Resistencia' placeholder='Resistencia' isRequired type='number'/>
                  <Input className='basis-1/4' defaultValue={5} label='Pase' placeholder='Pase' isRequired type='number' />
                  <Input className='basis-1/4' defaultValue={5} label='Gambeta' placeholder='Gambeta' isRequired type='number' />
                  <Checkbox className='' defaultSelected> ¿Es invitado? </Checkbox>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={ () => alert('Jugador creado')}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
    </Modal>

    </>
  )
}