import React, { useState } from 'react'
import "./Counter.css"

export const CounterApp = () => {

    const initialCounters = {
        counter1: 10,
        counter2: 20
    }

    const [counters, setCounter] = useState(initialCounters);

    console.log(counters);

    function handleCounter() {
        //Clonar el objeto usando el operador spread
        let updatedCounters = {...counters};
        updatedCounters.counter1 = (counters.counter1 + 1);
        setCounter(updatedCounters);    
    }

    return (
        <div>
            <h1>Counter 1: {counters.counter1}</h1>
            <h1>Counter 2: {counters.counter2}</h1>
            <hr></hr>
            <button className="btn btn-primary" onClick={handleCounter}>+1</button>
        </div>
    )
}
