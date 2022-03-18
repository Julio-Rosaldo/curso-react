import React, { Fragment, useState, useEffect } from "react";
import { listGifs } from "../helpers/ListGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { ImageItem } from "./ImageItem";
import PropTypes from 'prop-types';

// Componente que recibe un elemento del arreglo "categories"
// y lo renderiza
export const ImageGrid = ({ category }) => {

    /*
    const [images, setImages] = useState([]);
    */

    // El useEffect indica que la instruccion solo se ejecutara
    // en la primera renderizacion, el array incluye los elementos
    // los cuales si cambian de valor, se debera ejecutar de nuevo
    // la renderizacion
    /*
    useEffect(() => {
        getGifs();
    }, [category])
    */

    /*
    const getGifs = () => {
        listGifs(category).then( (gifs) => {
            setImages(gifs);
        })
    }
    */

    const {data:images, loading} = useFetchGifs(category);
    console.log(images);
    console.log(loading);

    function map() {
        // La funcion <array>.map regresa una funcion for each
        // que genera un array de los resultados
        return images.map((image) => {
            return <span key={image.id}><ImageItem image={image} /></span>
        })
    }

    return (
        <Fragment>
            <h3>{category}</h3>
            {
                loading && <p>Cargando...</p>
            }
            <div className="card-grid">
                {map()}
            </div>
        </Fragment>
    )
}

ImageGrid.propTypes = {
    category: PropTypes.string.isRequired
}