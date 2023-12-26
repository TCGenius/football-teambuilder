'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function RouterButton({children, navigateTo}) {
  const router = useRouter()
  return (
      <Button 
      className='text-md shadow-md shadow-yellow-800' 
      color='success' 
      onClick={() => navigateTo ? router.push(navigateTo) : router.back()} >{children}</Button>
  )
}