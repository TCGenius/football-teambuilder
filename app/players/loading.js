'use client'
import { Spinner } from '@nextui-org/react';

export default function Loading() {
  <div className='flex mx-auto items-center justify-center w-64 h-64'>
    <Spinner label="Cargando jugadores..." color="warning" />
  </div>
}