import React, { useState } from 'react'




const AgregarCategoria = ({agregarCategoria}) => {

    const [value, setValue] = useState('');
    const inputChange = ({target}) =>{
        setValue(target.value);
    }

const onSubmit = (event) => {
    event.preventDefault();
   
   if(value.trim().length <= 1) return;
    setValue('');
    agregarCategoria(value.trim());
   
}
  return (
    <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Buscar Gifs"
        value={value}
        onChange={inputChange}
        />
    </form>
  )
}

export default AgregarCategoria
