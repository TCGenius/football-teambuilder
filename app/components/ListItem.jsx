import Image from 'next/image'
import Icons from '@/styles/icons';


export function ListItem({ ataque, nombre, pase, defensa, resistencia, gambeta, juega, invitado }) {

  return(
    <div className={`flex px-4 py-2 rounded-full bg-white w-full gap-2 items-center hover:bg-slate-300`}>
        <div className='text-black w-fit h-fit'>
          {Icons.userCircle}
        </div>
        <div className='text-xl font-medium text-black text-center capitalize w-full'>
            {nombre.split('-', 2)[1]}
        </div>
    </div>
  );
}