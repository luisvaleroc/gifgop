import React, { useState } from 'react'
import AgregarCategoria from './components/AgregarCategoria'
import Grid from './components/Grid'
const GifApp = () => {


    const [categorias, setCategorias] = useState(['Naruto', 'Dragon Ball'])

    const agregarCategoria = (nuevaCategoria) => {

        if(categorias.includes(nuevaCategoria)) return;
        setCategorias([nuevaCategoria, ...categorias])
    }


  return (
    <>
      <h1>Gif</h1>
      <AgregarCategoria agregarCategoria={(value) => agregarCategoria(value)}/>

        <ol>
            {
        categorias.map((categoria) => (
           <Grid 
           key={categoria}
           categoria={categoria}
           />
        ))
        }
        </ol>

    </>
  )
}

export default GifApp
