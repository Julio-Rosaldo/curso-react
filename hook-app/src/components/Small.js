import React, { memo } from 'react'

// Memo permite que un componente hijo no se renderice nuevamente
// a menos que alguna de sus propiedades cambie, esto sin importar
// si el padre se renderiza nuevamente, ya que por defecto si alguna
// propiedad del padre cambia, todos los hijos se renderizan nuevamente
export const Small = memo(({ value }) => {

    console.log("Componente llamado");

    return (
        <div>{value}</div>
    )
}
)