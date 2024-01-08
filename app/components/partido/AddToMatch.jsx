'use client'
import { Button } from '@nextui-org/react'
import { useMatchContext } from '@/app/contexts/MatchContext'
import { endpoint } from '@/config/config'
import { post } from '@/app/functions/fetchs'
import { useRouter } from 'next/navigation'

export default function AddToMatch() {
  const router = useRouter()
  const {nextMatch, setNextMatch} = useMatchContext()
  const playerIds = nextMatch.map(value => value.id)
  const addRoute = `${endpoint}/juegaPartido`
  const addPlayerHandler = async () => {
    await post(addRoute, playerIds)
    router.refresh()
    setNextMatch([])
  }


  return(
    <Button
    color='success'
    className='flex items-center justify-center px-2 py-1'
    isDisabled={nextMatch.length == 0 ? true : false}
    onClick={addPlayerHandler}>
      {`Sumar ${nextMatch.length} ${nextMatch.length == 1 ? 'jugador' : 'jugadores'}`}
    </Button>
  )
}