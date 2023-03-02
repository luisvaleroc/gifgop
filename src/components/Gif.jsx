import React from 'react'

const Gif = ({titulo, url}) => {
  return (
    <div>
        <img src={url} alt={titulo} />
        <p>{titulo}</p>
    </div>
  )
}

export default Gif
