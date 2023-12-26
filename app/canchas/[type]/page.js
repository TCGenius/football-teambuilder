import CourtList from '@/app/components/canchas/CourtList'
import { endpoint } from '@/config/config'
import Link from 'next/link'

async function getData(type) {
  const res = await fetch(`${endpoint}/canchas/${type}`, {cache: 'no-store'})
  return res.json()
}

export default async function CanchasPage( {params} ) {
  const { type } = params

  const data = await getData(type)
    
  return(
    <>
    <nav className='container m-auto flex gap-4 items-center justify-start p-3'>
      <Link href='/canchas/0' className={`${type == 0 ? 'text-lg text-blue-700 font-bold' : 'text-black'}`}>Todas</Link>
      <Link href='/canchas/5' className={`${type == 5 ? 'text-lg text-blue-700 font-bold' : 'text-black'}`}>Canchas de 5</Link>
      <Link href='/canchas/7' className={`${type == 7 ? 'text-lg text-blue-700 font-bold' : 'text-black'}`}>Canchas de 7</Link>
    </nav>
      <div className='container m-auto flex flex-wrap gap-4 items-center justify-center p-4'>
        <CourtList courts={data.canchas} />
      </div>
    </>
  )
}