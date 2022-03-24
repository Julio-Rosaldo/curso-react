import React, { Fragment } from 'react';
import "./Counter.css";
import { UseCounter } from '../hooks/UseCounter';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = UseCounter();

    return (
        <Fragment>
            <div>Counter With Custom Hook: {state}</div>
            <hr></hr>
            <button className="btn" onClick={() => increment()}>+1</button>
            <button className="btn" onClick={() => decrement()}>-1</button>
            <button className="btn" onClick={() => reset()}>Reset</button>
        </Fragment>

    )
}
