import React, { useEffect, useState } from 'react'
import Gif from './Gif';

const Grid = ({categoria}) => {
  
    const [imagenes, setImagenes] = useState([]);

    const obtenerGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=zYNCTixSi5Vx3k8z4nOI8wsMzfBZoxU3&q=${categoria}&limit=10&offset=0&rating=g&lang=en`
        const respuesta = await fetch(url)
        const { data } = await respuesta.json();
        
        const gifs = data.map(imagen =>({
            id: imagen.id,
            titulo: imagen.title,
            url: imagen.images.downsized_medium.url
        }))

        setImagenes(gifs)
        
    }
   
    useEffect(()=>{
        obtenerGif();
    }, [categoria])
    
  
    return (
   <div>

    <h3> {categoria} </h3>    

    {

    imagenes.map((imagen) => <Gif 
    key={imagen.id}
    {...imagen}
    />   
    )
}

   </div>
  )
}

export default Grid
