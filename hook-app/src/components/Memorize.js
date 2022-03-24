import React, { useState } from 'react';
import { UseCounter } from '../hooks/UseCounter';
import "./Effects.css";
import { Small } from './Small';

export const Memorize = () => {

    const {count, increment} = UseCounter(10);

    const [show, setShow] = useState(true);

    console.log(show);

  return (
    <div>
        <h1>Count: <Small value={count}></Small> </h1>
        <hr></hr>
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
