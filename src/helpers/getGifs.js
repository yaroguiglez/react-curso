    // con esta funcion cogeremos las imagenes que queramos y nos quedaremos solo con los 
    // valores que queramos de ellas para mostrarlas
    export const getGifs = async(category) => {

        // este url se construye mirando la pagina "https://developers.giphy.com/docs/api/endpoint#search"
        // se probó en Postman 
        const url = `https://api.giphy.com/v1/gifs/search?api_key=qEGSLFeIa9VDw1fsrtuz8bomkRrfZ2RX&q=${ category }&limit=10`;
        const resp = await fetch( url );

        // para quedarme con los datos de las imagenes y poder trabajar con algunos de sus valores
        const { data } = await resp.json();

        // ahora me quedo con los valores que quiero de cada imagen
        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))
        
        return gifs;
    }