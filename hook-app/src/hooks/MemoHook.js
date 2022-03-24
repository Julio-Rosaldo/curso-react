import React, { useMemo, useState } from 'react';
import { UseCounter } from '../hooks/UseCounter';
import "../components/Effects.css";
import { Small } from '../components/Small';

export const MemoHook = () => {

    const {count, increment} = UseCounter(5000);

    const [show, setShow] = useState(true);

    const procesoPesado = (iteraciones) => {
        for (let i = 0; i< iteraciones; i++) {
            console.log("Ciclo");
        }
        return iteraciones.toString() + ": iteraciones realizadas";
    }

    // Permite que una funcion solo se ejecute nuevamente si el parametro
    // indicado cambia de valor, eso sin importar si el componente se
    // renderiza nuevamente
    const memoProcesoPesado = useMemo( () => procesoPesado(count), [count]);

    console.log(show);

  return (
    <div>
        <h1>MemoHook</h1>
        <h1>Count: <Small value={count}></Small> </h1>
        <hr></hr>

        <p>{memoProcesoPesado}</p>

        <button className="btn btn-primary" 
        onClick={() => increment()}>+1</button>

        <p></p>
        <button className='btn btn-outline-primary ml-3'
        onClick={ () => {setShow(!show)} }>
            Show/Hide {JSON.stringify(show)}
        </button>
    </div>
  )
}
