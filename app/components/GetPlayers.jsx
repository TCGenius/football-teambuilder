'use client'
import React, { isValidElement, useState } from "react";
import useSWR from 'swr';
import config from '@/config/config';
import { Card } from './Card';
import Icons from '@/styles/icons';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Checkbox, Spinner} from "@nextui-org/react";

const fetchPlayers = (url) => fetch(url).then((res) => res.json()); // Uso esto para usar SWR y hacerlo reutilizable. Leer más para hacerlo mejor.

export default function GetPlayers() {
  const [atq, setAtq] = useState(0)
  const [def, setDef] = useState(0)
  const [pas, setPas] = useState(0)
  const [gam, setGam] = useState(0)
  const [res, setRes] = useState(0)
  const [inv, setInv] = useState(true)
  const [idPlayer, setIdPlayer] = useState(null)
  const [playerName, setPlayerName] = useState('')
  let myHeaders = new Headers(); //Desde acá hasta la validación, totalmente robado de Postman
  myHeaders.append("Content-Type", "application/json");
  let raw = JSON.stringify({
    "player": {
      "nombre": playerName,
      "ataque": atq,
      "defensa": def,
      "gambeta": gam,
      "pase": pas,
      "resistencia": res,
      "invitado": Number(inv)
    }
  });
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const validateName = (field) => field.match(/\D/); //Buscar cómo carajo validar con Regex
  //value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const validationName = React.useMemo(() => {
    return validateName(playerName) ? "valid" : "invalid";
  }, [playerName]);
  const validateFields = (field) => field > 99 || field < 1 ? false : true
  const validationAtq = React.useMemo(() => {
    return validateFields(atq) ? "valid" : "invalid";
  }, [atq]);
  const validationDef = React.useMemo(() => {
    return validateFields(def) ? "valid" : "invalid";
  }, [def]);
  const validationRes = React.useMemo(() => {
    return validateFields(res) ? "valid" : "invalid";
  }, [res]);
  const validationGam = React.useMemo(() => {
    return validateFields(gam) ? "valid" : "invalid";
  }, [gam]);
  const validationPas = React.useMemo(() => {
    return validateFields(pas) ? "valid" : "invalid";
  }, [pas]);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {isOpen: isOpenPlayer, onOpen: onOpenPlayer, onOpenChange: onOpenChangePlayer} = useDisclosure();
  const endpoint = config.endpoint;
  // const { data: playerData } = useSWR (
  //   `${endpoint}/unPlayer/${idPlayer}`,
  //   fetchPlayers
  // )
  
  const fetchOpen =  () => {
     fetch(`${endpoint}/unPlayer/${idPlayer}`)
    .then(response => response.json())
    .then((result) =>  {
      
      setAtq(result.players[0].ATAQUE)
      setDef(result.players[0].DEFENSA)
      setGam(result.players[0].GAMBETA)
    } )
}

  const { data, error, isLoading } = useSWR( // useSWR me permite hacer un fetch dentro de un client component.
`${endpoint}/players`,
fetchPlayers
);
if (error) return 'Ocurrió un error';
if (isLoading) return (<div className='flex mx-auto items-center justify-center w-64 h-64'><Spinner label="Cargando jugadores..." color="warning" /></div>);
  return (
    <>
    <div className='flex flex-wrap gap-6 justify-center max-w-screen mx-auto p-5'> 
          {data.players.map(player => (
            <Card openPlayer={onOpenPlayer} fetchOpen={fetchOpen} setCardName={setIdPlayer} id={player.ID} key={player.id} invitado={player.INVITADO} ataque={player.ATAQUE} pase={player.PASE} gambeta={player.GAMBETA} defensa={player.DEFENSA} resistencia={player.RESISTENCIA} nombre={player.NOMBRE} />
          ))}
          <Button onPress={onOpen} disableRipple='1'
            className='bg-opacity-0 cardNew w-64 h-80 bg-contain flex justify-center items-center group'>
            <div className='transition-all group-hover:rotate-180 duration-300 text-gray-600 group-hover:text-yellow-600 group-hover:text-opacity-100 w-28 text-opacity-50'>{Icons.plusCircle}</div>
          </Button>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>{/*Usar componentes aparte para los Modal. Lo intenté y no pude jeje. Tal vez debería ser parte del botón que lo crea*/}
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Agregar jugador</ModalHeader>
                  <ModalBody>
                    <form className='flex w-full flex-wrap gap-4'>
                      <Input className='' defaultValue={playerName} onValueChange={setPlayerName} label='Nombre' type='text' labelPlacement='outside'
                      color={validationName === "invalid" ? "danger" : "success"}
                      errorMessage={validationName === "invalid" && "Ponele un nombre posta"}
                      validationState={validationName}/>
                      <Input className='basis-1/4' label='Ataque' isRequired type='number' defaultValue={atq} 
                      color={validationAtq === "invalid" ? "danger" : "success"}
                      errorMessage={validationAtq === "invalid" && "Ingrese un valor de 1 a 99"}
                      validationState={validationAtq}
                      onValueChange={setAtq} />
                      <Input className='basis-1/4' onValueChange={setDef} defaultValue={def} label='Defensa' isRequired type='number'
                      color={validationDef === "invalid" ? "danger" : "success"}
                      errorMessage={validationDef === "invalid" && "Ingrese un valor de 1 a 99"}
                      validationState={validationDef} />
                      <Input className='basis-1/4' onValueChange={setRes} defaultValue={res} label='Resistencia' isRequired type='number'
                      color={validationRes === "invalid" ? "danger" : "success"}
                      errorMessage={validationRes === "invalid" && "Ingrese un valor de 1 a 99"}
                      validationState={validationRes} />
                      <Input className='basis-1/4' onValueChange={setPas} defaultValue={pas} label='Pase' isRequired type='number'
                      color={validationPas === "invalid" ? "danger" : "success"}
                      errorMessage={validationPas === "invalid" && "Ingrese un valor de 1 a 99"}
                      validationState={validationPas} />
                      <Input className='basis-1/4' onValueChange={setGam} defaultValue={gam} label='Gambeta' isRequired type='number' 
                      color={validationGam === "invalid" ? "danger" : "success"}
                      errorMessage={validationGam === "invalid" && "Ingrese un valor de 1 a 99"}
                      validationState={validationGam} />
                      <Checkbox onValueChange={setInv} > ¿Es invitado? </Checkbox>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={ () => {
                      onClose()
                      setIdPlayer(null)
                      setPlayerName('')
                      setAtq(0)
                      setPas(0)
                      setDef(0)
                      setRes(0)
                      setGam(0)
                      }}>
                      Cerrar
                    </Button>
                    <Button 
                    isDisabled={validationName == 'valid' && validationAtq == 'valid' && validationDef == 'valid' && validationRes == 'valid' && validationPas == 'valid' && validationGam == 'valid' ? false : true}
                    color="primary" onPress={ () => {
                      fetch(`${endpoint}/agregarPlayer`, requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error)); 
                      alert('Jugador creado')
                      onClose( () => {
                        setIdPlayer(null)
                        setAtq(0)
                        setDef(0)
                        setRes(0)
                      })
                      }}>
                      Guardar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <Modal className='' isOpen={isOpenPlayer} onOpenChange={onOpenChangePlayer}>{/*Usar componentes aparte para los Modal. Lo intenté y no pude jeje. Tal vez debería ser parte del botón que lo crea*/}
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex justify-center">QUÉ JUGADOOOOR</ModalHeader>
                  <ModalBody className='flex justify-center'>
                    <Card invitado={0} details={1} ataque={atq} pase={pas} gambeta={gam} defensa={def} resistencia={res} nombre={idPlayer}/>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>

    </>
  )
}