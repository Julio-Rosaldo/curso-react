import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({x: 0, y: 0});
    const {x, y} = coors;

    useEffect( () => {
        console.log("Montado");

        const mousemove = (e) => {
            //console.log(e);
            const coors = {x:e.x, y:e.y};
            setCoors(coors);
            console.log(coors);
        };

        window.addEventListener("mousemove", mousemove);

        return () => {
            window.removeEventListener("mousemove", mousemove);
            console.log("Desmontado")
        }

    }, [])

  return (
    <div>
        <h3>Coordenadas</h3>
        <p>
            x: {x}, y: {y}
        </p>
    </div>
  )
}
