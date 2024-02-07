'use client'
import { createContext, useContext, useState } from 'react'
import { endpoint } from '@/config/config'

const MatchContext = createContext()

export const useMatchContext = () => useContext(MatchContext)


export const MatchProvider = ({children}) => {
    const [nextMatch, setNextMatch] = useState([])
    const [playerTrade, setPlayerTrade] = useState({
        from1to2: {},
        from2to1: {}
    })

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
    
    const playersToTrade = (player, team) => {
        if (team === 1){
            playerTrade.from1to2.id == player.id ? setPlayerTrade({...playerTrade, from1to2: {}}) : setPlayerTrade({...playerTrade, from1to2: player})
        } else {
            playerTrade.from2to1.id == player.id ? setPlayerTrade({...playerTrade, from2to1: {}}) : setPlayerTrade({...playerTrade, from2to1: player})
        }

        console.log( playerTrade )
    }

    return (
        <MatchContext.Provider value={{
            nextMatch,
            setNextMatch,
            addToNextMatch,
            removeFromNextMatch,
            playersToTrade,
            playerTrade
        }}>
            {children}
        </MatchContext.Provider>
    )
}