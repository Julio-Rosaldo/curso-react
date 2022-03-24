import React, { useState } from 'react'

export const UseForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

  return [values, handleInputChange];
}
