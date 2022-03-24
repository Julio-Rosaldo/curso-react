import React, { useRef } from 'react';
import "./Effects.css";

export const FocusScreen = () => {

    const ref = useRef();

    const handleClick = () => {
        document.querySelector("#name").focus();
        //ref.current.focus();
    }

  return (
    <div>
        <h1>FocusScreen</h1>
        <hr></hr>
        <input id="name" className="form-control" placeholder="Nombre" 
        ref={ref}></input>

        <button className="btn btn-outline-primary mt-5" 
        onClick={handleClick}>Focus</button>
    </div>
  )
}
