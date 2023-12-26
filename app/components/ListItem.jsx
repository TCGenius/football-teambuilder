import Image from 'next/image'
import Icons from '@/styles/icons';


export function ListItem({ ataque, nombre, pase, defensa, resistencia, gambeta, juega, invitado }) {
const nombreBien = nombre.split('-', 2)[1]
  return(
    <div className={`flex px-4 py-2 rounded-full
    ${nombreBien == 'Nacho' ? 'bg-gradient-to-r from-blue-500 via-yellow-400 to-80% to-pink-500' : 'bg-white'}
     w-full gap-2 items-center hover:bg-slate-300`}>
        <div className='text-black w-fit h-fit'>
          {Icons.userCircle}
        </div>
        <div className='text-xl font-medium text-black text-center capitalize w-full'>
            {nombreBien}
        </div>
    </div>
  );
}