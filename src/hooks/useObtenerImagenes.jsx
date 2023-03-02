import { useEffect, useState } from 'react'

import { obtenerGif } from '../servicios/obtenerGif';

const useObtenerImagenes = (categoria) => {
  
  
    const [imagenes, setImagenes] = useState([]);
    const [cargando, setCargando] = useState(true);

    const fechGifs = async () => {
       
        const gifs = await obtenerGif(categoria)
        setImagenes(gifs)
        setCargando(false);
        
    }
   
    useEffect(()=>{
        fechGifs();
    }, [categoria])
  
  
  
  
    return {
        imagenes,
        cargando
  }
    
  
}

export default useObtenerImagenes
