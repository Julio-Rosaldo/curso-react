import React, { Fragment, useEffect, useState } from 'react';
import "./Effects.css";
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });

    const {name, email} = formState;

    useEffect( () => {
    }, [formState])

    function handleInputChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Fragment>
            <h1>Use Effect</h1>
            <hr></hr>
            <div className='form*group'>
                <input type="text" 
                name="name" 
                className="form-control" 
                placeholder="Nombre" 
                autoComplete="off" 
                value={name} 
                onChange={handleInputChange}></input>

                <input type="text" 
                name="email" 
                className="form-control" 
                placeholder="Email" 
                autoComplete="off" 
                value={email} 
                onChange={handleInputChange}></input>
            </div>
            {(name === "123") && <Message />}
        </Fragment>
    )
}
