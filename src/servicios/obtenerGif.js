export const obtenerGif = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zYNCTixSi5Vx3k8z4nOI8wsMzfBZoxU3&q=${categoria}&limit=10&offset=0&rating=g&lang=en`
    const respuesta = await fetch(url)
    const { data } = await respuesta.json();
    
    const gifs = data.map(imagen =>({
        id: imagen.id,
        titulo: imagen.title,
        url: imagen.images.downsized_medium.url
    }))

    return gifs;
}