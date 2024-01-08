'use client'
import { createContext, useContext, useState } from 'react'

const MatchContext = createContext()

export const useMatchContext = () => useContext(MatchContext)

export const MatchProvider = ({children}) => {
    const [nextMatch, setNextMatch] = useState([])
    const [match, setMatch] = useState([])

    const addToNextMatch = (player) => {
      let matchSpread = [...nextMatch]
      matchSpread.push(player) // We receive only player IDs to make an array
      setNextMatch(matchSpread)
    }

    const addToMatch = () => {

    }

    return (
        <MatchContext.Provider value={{
            match,
            nextMatch,
            addToNextMatch,
            addToMatch
        }}>
            {children}
        </MatchContext.Provider>
    )
}