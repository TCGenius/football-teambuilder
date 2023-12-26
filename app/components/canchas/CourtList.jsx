import Icons from '@/styles/icons'
import {Progress} from "@nextui-org/react";

export default function CourtList({courts}) {
  
  return(
    <>
      {courts.map(court => (
        <div key={court.id} className='lg:w-2/5 w-full flex shadow-lg shadow-yellow-800 flex-col items-center gap-4 justify-center bg-white rounded-md p-4'>
          <div className='relative w-full border-b-1 border-gray-400'>
            <div className='text-lg w-full font-bold text-center'>
              {court.nombre}
            </div>
            <div className='absolute right-0 top-0'>
              <p className='text-blue-600 font-bold'>
                {court.tipo}
              </p>
            </div>
            </div>
          <div className='w-full flex items-center gap-2'><p className='text-red-600'>{Icons.location}</p>
          {court.direccion}</div>
          <div className='w-full flex items-center gap-2'>
              <p className='text-green-600'>{Icons.phone}</p>
              {court.telefono}
          </div>
            <div className='w-full'>
              <Progress 
              value={court.valoracion * 10}
              color={court.valoracion < 5 ? 'danger' : (court.valoracion >= 5 && court.valoracion < 8 ? 'warning' : 'success')}
              label='Valoración'
              valueLabel={`${court.valoracion}/10`}
              showValueLabel={true}
              classNames={{
                label:'text-sm tracking-wider',
                value:'text-sm tracking-wider'
              }}
              />
            </div>
        </div>
      ))}
    </>
  )
}