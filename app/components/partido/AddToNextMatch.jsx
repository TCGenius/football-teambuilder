'use client'
import Icons from '@/styles/icons';
import { Button, Tooltip } from '@nextui-org/react';
import { useMatchContext } from '@/app/contexts/MatchContext';

export default function AddToNextMatch( { suspended, player } ) {
  const { addToNextMatch, nextMatch, match } = useMatchContext()
  const isInNextMatch = nextMatch.includes(player)

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
        () => {addToNextMatch(player)}
      } 
      isDisabled = {suspended == 1 || isInNextMatch ? true : false}
      className='p-1 text-2xl text-white'>
        {Icons.football}
      </Button>
    </Tooltip>
  )
}