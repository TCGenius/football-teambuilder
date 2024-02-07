'use client'

import { useMatchContext } from '@/app/contexts/MatchContext'
import AddedPlayer from './AddedPlayer'
import { ScrollShadow } from '@nextui-org/react'

export default function NextMatchPlayers( { method, juegan } ) {
  const {nextMatch} = useMatchContext()

  const players = method != 1 ? nextMatch : juegan
  return(
    <div className={`flex h-52 flex-wrap shadow-inner overflow-y-scroll rounded-tr-md rounded-br-md items-start gap-2 w-full justify-start p-4 
    ${method == 1 ? 'bg-green-500 shadow-green-800' : 'bg-blue-500 shadow-blue-800'}`}>
      {players.map( (player, index) => (
        <AddedPlayer 
        key={player.id}
        nombre={player.nombre}
        index = {index}
        method={method}
        id={player.id}
            />
      ))}
    </div>
  )
}