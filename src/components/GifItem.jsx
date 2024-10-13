
// Para mostrar los gifs con sus títulos.

export const GifItem = ({ title, url, id }) => {

    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}