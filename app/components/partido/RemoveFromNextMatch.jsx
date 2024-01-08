'use client'
import Icons from '@/styles/icons';
import { Button, Tooltip } from '@nextui-org/react';

export default function RemoveFromNextMatch( { suspended } ) {
  
  return(
    <Tooltip 
    content = 'Expulsar'
    placement='bottom'
    color='danger'>
      <Button 
      isIconOnly 
      color='danger' 
      isDisabled={suspended == 1 ? true : false}
      className='p-1 text-2xl text-white'>
        {Icons.whistle}
      </Button>
    </Tooltip>
  )
}