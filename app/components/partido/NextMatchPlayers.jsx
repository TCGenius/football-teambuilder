'use client'

import { useMatchContext } from '@/app/contexts/MatchContext'
import AddedPlayer from './AddedPlayer'
import { ScrollShadow } from '@nextui-org/react'

export default function NextMatchPlayers( { method, color, juegan } ) {
  const {nextMatch, match} = useMatchContext()

  const players = method != 1 ? nextMatch : juegan
  return(
    <ScrollShadow className={`flex h-52 flex-wrap items-start gap-2 w-full justify-start p-4 bg-${color}-500 shadow-inner shadow-${color}-800`}>
      {players.map( (player, index) => (
        <AddedPlayer 
        key={player.id}
        nombre={player.nombre}
        index = {index}
        method={method}
        id={player.id}
            />
      ))}
    </ScrollShadow>
  )
}