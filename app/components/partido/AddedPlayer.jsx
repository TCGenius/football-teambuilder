'use client'

import { Chip } from '@nextui-org/react'
import { useMatchContext } from '@/app/contexts/MatchContext'
import { post } from '@/app/functions/fetchs'
import { endpoint } from '@/config/config'
import { useRouter } from 'next/navigation'

export default function AddedPlayer ( { method, nombre, index, id } ) {
  const router = useRouter()
  const { removeFromNextMatch } = useMatchContext()
  const removeRoute = `${endpoint}/quitarDelPartido`
  const body = [id]
  const removeFromMatch = async () => {
   //Agregar esto en un Modal / Popover, para no eliminarlo directamente.
    post(removeRoute, body)
   router.refresh()
}


  return(
    <Chip
    className='flex gap-2 bg-white'
    size='lg'
    onClose={method == 1 ? removeFromMatch: () => removeFromNextMatch(index)}
    variant='flat'>
      {nombre}
    </Chip>
  )
}