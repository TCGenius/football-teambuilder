'use client'
import { createContext, useContext, useState } from 'react'
import { endpoint } from '@/config/config'

const MatchContext = createContext()

export const useMatchContext = () => useContext(MatchContext)


export const MatchProvider = ({children}) => {
    const [nextMatch, setNextMatch] = useState([])

    const addToNextMatch = (player) => {
      let matchSpread = [...nextMatch]
      matchSpread.push(player) // We push the entire object
      setNextMatch(matchSpread)
    }

    const removeFromNextMatch = (player) => {
        let matchSpread = [...nextMatch]
        matchSpread.splice(player, 1) //We remove the player with their index
        setNextMatch(matchSpread)
    }
    

    return (
        <MatchContext.Provider value={{
            nextMatch,
            setNextMatch,
            addToNextMatch,
            removeFromNextMatch
        }}>
            {children}
        </MatchContext.Provider>
    )
}