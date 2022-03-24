import React, { useState } from 'react';
import { CustomHooks } from '../hooks/CustomHooks';
import "./Effects.css";

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    function cambiar () {
        setShow(!show);
    }

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr></hr>
            {
                show && <CustomHooks></CustomHooks>
            }
            
            <button className="btn btn-primary mt-5" 
            onClick={cambiar}>Mostrar/Ocultar</button>
        </div>

        

    )
}
