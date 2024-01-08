'use client'
import { Button } from '@nextui-org/react'
import { useMatchContext } from '@/app/contexts/MatchContext'

export default function AddToMatch() {
  const {nextMatch} = useMatchContext()

  return(
    <Button
    color='success'
    className='flex items-center justify-center px-2 py-1'>
      {nextMatch.length} Sumar al partido
    </Button>
  )
}