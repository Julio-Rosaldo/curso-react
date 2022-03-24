import React, { useState } from 'react'

export const UseCounter = (initialState = 1) => {
    const [count, setCounter] = useState(initialState);

    const increment = (factor = 1) => {
        setCounter(count + factor);
    }

    const decrement = (factor = 1) => {
        setCounter(count - factor);
    }

    function reset() {
        setCounter(initialState);
    }

    return {
        count,
        increment,
        decrement,
        reset
    }
}
