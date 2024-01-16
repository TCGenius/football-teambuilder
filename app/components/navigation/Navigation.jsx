'use client'
import NavLabelHijo from './NavLabelHijo'
import Icons from '@/styles/icons'
import { useState } from 'react'
import CourtButton from './CourtButton'
import Link from 'next/link'

const links = [{
  icon: Icons.home,
  label: 'Home',
  route: '/',
  nivel: 0
}, {
  icon: Icons.user,
  label: 'Jugadores',
  route: '/players',
  nivel: 0
}, {
  icon: Icons.users,
  label: 'Partidos',
  route: '/partido',
  nivel: 0
}]
export function Navigation () {

  const [showSide, setShowSide] = useState(false)
  const showSideHandler = () => {
    setShowSide(!showSide)
  };
  
  return (
    <>
    <header className='bg-green-400 h-16 border-b fixed top-0 left-0 right-0 z-40 border-blue-400'>
        <nav className={`flex justify-between h-full items-center px-9 z-50`}>
          <button id='hamb-button' className='lg:hidden' onClick={showSideHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <Link 
          className='flex items-center justify-center gap-2 group'
          href={'/'}>
            <h1 className='transition-all text-3xl group-hover:text-blue-950 group-hover:rotate-180'>{Icons.football}</h1>
            <h1 className='transition-all group-hover:text-blue-950 text-2xl font-bold'>Fulbuilder</h1>
          </Link>
          <CourtButton />
        </nav>
    </header>
    <aside id='sidebar' className={
      `absolute lg:block bg-indigo-200 h-full transition-all duration-100 ease-in-out truncate pt-16
    ${showSide ? 'w-64' : 'w-0 overflow-hidden'}
       h-full  lg:min-w-[19%] lg:max-w-[19%]  rounded-none border-none z-30`}>
        <div className={`p-4 space-y-4 text-lg transition-opacity duration-100
        
        `}>
          <ul className={`w-full items-center pl-4 space-y-4 pt-4`}>
            {links.map(({ label, route, icon, nivel }) => (
              <li key={route}>
                <NavLabelHijo ruta={route} name={label} icono={icon} nivel={nivel}/>
              </li>
            ))}
          </ul>
        </div>
    </aside>
    </>
  )
}
