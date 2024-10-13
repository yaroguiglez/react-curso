import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    

    const [inputValue, setInputValue] = useState('');

    const onInputChanged = ( { target } ) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {

        // para evitar el refresh de la página
        event.preventDefault();   

        // para que haya más de un caracter
        if ( inputValue.trim().length <= 1 ) return;  

        // envio el nuevo valor hacia el nodo padre "GifExpertApp" 
        // y lo añado a las categorias anteriores
        //setCategories( (categories) => [ inputValue, ...categories ]);

        onNewCategory( inputValue.trim() );

        // para que se limpie la entrada cuando se envía un nombre
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChanged }
            />
        </form>
    )
}