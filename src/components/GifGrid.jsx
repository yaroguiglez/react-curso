
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    // Esta forma de hacerlo es creando un propio custom hook
    const { images, isLoading} = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2> Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( (image) => (
                        //<li key={images.id}> {images.title} </li>
                        <GifItem 
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>

        </>
    )
}