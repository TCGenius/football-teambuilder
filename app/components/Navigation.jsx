'use client'
import NavLabelHijo from './NavLabelHijo'
import Icons from '@/styles/icons'
import { useState } from 'react'

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
    <header className='bg-lime-600 h-16 border-b border-white'>
        <nav className={`flex justify-between h-full items-center px-9`}>
        <button id='hamb-button' className='lg:hidden' onClick={showSideHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
          <div className='flex items-center'>
            <h1>LOGO</h1>
          </div>
          <button id='profile'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </button>
        </nav>
    </header>
    <aside id='sidebar' className={
      `absolute lg:block bg-indigo-200 h-full transition-all duration-100 ease-in-out truncate
    ${showSide ? 'w-64' : 'w-0 overflow-hidden'}
       h-full  lg:min-w-[19%] lg:max-w-[19%]  rounded-none border-none z-50`}>
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