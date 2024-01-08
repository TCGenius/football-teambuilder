'use client'
import Icons from '@/styles/icons';
import { Button, Tooltip } from '@nextui-org/react';
import { post } from '@/app/functions/fetchs';
import { endpoint } from '@/config/config';
import { useMatchContext } from '@/app/contexts/MatchContext';

export default function AddToNextMatch( { suspended, playerId } ) {
  const { addToNextMatch } = useMatchContext()
  const body = {
    id: playerId
  }

  const route = `${endpoint}/juegaPartido`
  const postHandler = () => {
    post(route, body)
  }

  return(
    <Tooltip 
    content = 'Convocar'
    placement='bottom'
    className='border-1'
    color='success'>
      <Button 
      isIconOnly 
      color='success'
      onClick={
        () => {addToNextMatch(playerId)}
      } 
      isDisabled = {suspended == 1 ? true : false}
      className='p-1 text-2xl text-white'>
        {Icons.football}
      </Button>
    </Tooltip>
  )
}