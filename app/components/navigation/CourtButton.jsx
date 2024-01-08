'use client'
import { Tooltip, Chip } from '@nextui-org/react'
import Link from 'next/link'
import Icons from '@/styles/icons'
import { useMatchContext } from '@/app/contexts/MatchContext'

export default function CourtButton(){
  const { match } = useMatchContext()

  return(
    <Tooltip
    content='Armar partido'
    className=''>
      <Link className='text-4xl gap-1 flex items-center justify-center'
      href='/partido/current'>
        {Icons.court}
      </Link>
    </Tooltip>
  )
}