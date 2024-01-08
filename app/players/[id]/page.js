import CardOnePlayer from '@/app/components/CardOnePlayer'
import RouterButton from '@/app/components/navigation/RouterButton'
import { endpoint } from '@/config/config'
import Icons from '@/styles/icons'

async function getData(id) {
  const res = await fetch(`${endpoint}/unPlayer/${id}`, {cache: 'no-store'})
  return res.json()
}

export default async function OnePlayerPage( { params } ) {
  const { id } = params

  const data = await getData(id)

  const player = data.players[0]
  
  return(

    <div className='container flex flex-col h-full justify-center items-center p-6 gap-3'>
      <div className='w-full flex items-center justify-start'>
        <RouterButton>
          Atrás
        </RouterButton>
      </div>
      <CardOnePlayer
      player = {player} />
    </div>

  )
}