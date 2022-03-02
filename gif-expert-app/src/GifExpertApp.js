import React, { Fragment, useEffect, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { ImageGrid } from './components/ImageGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    function map() {
        // La funcion <array>.map regresa una funcion for each
        // que genera un array de los resultados
        return categories.map( (category) => {
            //return <li key={category}>{category}</li>
            return <ImageGrid key={category} category={category}/>
        })
    }

    // Cada vez que en el componente AddCategory se agregue un
    // elemento al array categories se renderiza todo ESTE
    // componente, provocando que ImageGrid se renderize nuevamente
    // lo que a su vez dispara la funcion useFetchGifs y tambien
    // renderiza nuevamente cada imagen de cada categoria

    // La renderizacion de los componentes no afecta a los valores
    // dinamicos que ya esten establecidos
    return (
        <Fragment>
            <h2>Gif Expert App</h2>
            {/* Se pasa la funcion setCategories */}
            <AddCategory setCategories={setCategories}/>
            <hr />
            {
                //<button onClick={handleAdd}>Agregar</button>
            }
            <ol>
                {map()}
            </ol>
        </Fragment>
    )
}