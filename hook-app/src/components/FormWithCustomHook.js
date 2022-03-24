import React, { Fragment, useEffect } from 'react';
import "./Effects.css";
import { UseForm } from '../hooks/UseForm';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = UseForm({
        name: "",
        email: "",
        password: ""
    });

    const {name, email, password} = formValues;

    useEffect( () => {
        console.log("Email modificado")
    }, [email] );

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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

                <input type="password" 
                name="password" 
                className="form-control" 
                placeholder="*****" 
                autoComplete="off" 
                value={password} 
                onChange={handleInputChange}></input>

            </div>

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}
