import { useState } from "react"

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCtegory = ( newCategory ) => {

        // chequeamos si la categoria nueva ya está en la lista...
        // si existe no hace nada
        if ( categories.includes(newCategory) ) return;


        //categories.push(newCategory);
        setCategories( [ newCategory, ...categories ] );
    }

    return (
        <>
            <h1>GifExperteApp</h1>

            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCtegory(value) }
            />

            { 
                categories.map( ( category ) => (
                        <GifGrid 
                            key={ category } 
                            category= { category } 
                        />
                ))
            }

        </>
    )
}


//Api key para la url de los gifs --> qEGSLFeIa9VDw1fsrtuz8bomkRrfZ2RX