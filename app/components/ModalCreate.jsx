'use client'
import { Modal, ModalHeader, ModalBody, Input, ModalContent, Checkbox, Button, ModalFooter } from '@nextui-org/react'

export function ModalCreate (isOpen, onOpenChange, playerName, setPlayerName, validationName, validationAtq, 
validationDef, validationGam, validationPas, validationRes, atq, pas, gam, res, def, setAtq, setPas, setGam,
setRes, setDef, handleCreate, handleClose) {
<Modal isOpen={isOpen} onOpenChange={onOpenChange}>{/*Usar componentes aparte para los Modal*/}
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
                    <Button color="danger" variant="light" onPress={handleClose}>
                      Cerrar
                    </Button>
                    <Button 
                    isDisabled={validationName == 'valid' && validationAtq == 'valid' && validationDef == 'valid' && validationRes == 'valid' && validationPas == 'valid' && validationGam == 'valid' ? false : true}
                    color="primary" onPress={handleCreate}>
                      Guardar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
}