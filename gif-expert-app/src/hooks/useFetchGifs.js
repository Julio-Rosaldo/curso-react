import { useEffect, useState } from "react"
import { listGifs } from "../helpers/ListGifs";

// Hook a medida que orquestra el llamado a la consulta
// de imagenes
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /*
    setTimeout( () => {
        setState({
            data: [1, 2, 3, 4, 5],
            loading: false
        })
    }, 3000);
    */

    console.log("Hook " + category);

    // La funcion useEffect permite controlar la ejecucion de las
    // funciones despues de que se renderizan todos los componentes.

    // Esto implica la creacion implicida de un estado (useState)
    // que se mantiene en memoria cuyas referencias de acceso son
    // los valores que se especifican como segundo argumento de la
    // funcion. Si alguno de estos valores cambia, la funcion que
    // tenga como argumento el useEffect sera ejecutada nuevamente
    // Si useEffect se ejecuta sin que alguno de estos valores
    // cambie, se regresara el estado en memoria que ya se tenia
    // previamente

    // En este caso, se evita llamar al API a menos que la categoria
    // cambie, lo cual es improbable para este caso
    useEffect(() => {
        listGifs(category).then( (images) => {
            setState({
                data: images,
                loading: false
            });
        } )
    }, [category])

    return state;
}