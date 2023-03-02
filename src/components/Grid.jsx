import React from 'react'
import useObtenerImagenes from '../hooks/useObtenerImagenes';
import Gif from './Gif';

const Grid = ({categoria}) => {
  
    
    const {imagenes, cargando } = useObtenerImagenes(categoria)
  
    return (
   <div>

    <h3> {categoria} </h3> 

    {cargando && (<h2>Cargando....</h2>)}

    <div className="d-flex">
    {

    imagenes.map((imagen) => <Gif 
    key={imagen.id}
    {...imagen}
    />   
    )

}
</div>

   </div>
  )
}

export default Grid
