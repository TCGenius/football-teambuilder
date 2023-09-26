'use client' //Renderiza en el cliente para que podamos usar usePathname(), para leer la ruta y cambiar estilos dinámicamente.
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const getSlash = (route) => {
  let slashes = []
  route.split('').forEach((element, index) => {
    if (element === '/') {
      slashes.push(index);
    }
  });
  return slashes //Esto convierte en array cada ruta y saca las "/". Con eso, sacamos mostramos los hijos de la ruta actual.
}
export default function NavLabelHijo({ name, ruta, icono, nivel }) {
  const router = usePathname();
  const routerSlashes = getSlash(router);
  const rutaSlashes = getSlash(ruta);
  const rutaParent = ruta.substring(0, rutaSlashes[nivel])
  const routerParent = router.substring(0, routerSlashes[nivel])

  //Meto lo del "nivel" para poder dar estilos según el nivel en el que se encuentre el menú
  return(
    <Link href={ruta} 
    className={`
    transition-all group text-md gap-2 overflow-hidden
    ${routerParent == rutaParent || nivel == 0 ? 'flex' : 'hidden' /*Con esto, escondo lo que no es nivel 0*/}
    ${nivel == 0 ? 'ml-0' : `ml-${4*nivel} bg-gradient-to-r from-gray-100 to-white` /* Con esto doy tabulación a los niveles inferiores. El nivel se saca del array de las opciones que enviamos.*/} 
    ${router == ruta ? 
    'text-white text-lg first:bg-gradient-to-r first:from-lime-800 first:to-lime-400 first:rounded-lg group/active' : 
    'text-black first:hover:ring-2 first:hover:ring-lime-600 first:rounded-lg group/inactive' 
    /* Estilos si nos encontramos en esta ruta*/}
    `}>
      <div className={`flex gap-2 w-full px-4 py-2 items-center`}>
        <span className='group-hover:animate-pulse'>{icono}</span>{
        //Uso group para que el hover al grupo completo afecte estilos locales.
        }
        <span>{name}</span>
      </div>
    </Link>
  )
} 