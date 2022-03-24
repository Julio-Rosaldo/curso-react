import React, { useEffect, useRef, useState } from 'react'

export const UseFetch = (url) => {

    const initialState = {
        data: null,
        loading: true,
        error: null
    };

    const isMounted = useRef(true);

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])
  
    const [state, setState] = useState(initialState);

    useEffect( () => {

        setState(initialState);

        fetch(url)
        .then(response => response.json())
        .then(data => {

            setTimeout( () => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    })
                } else {
                    console.log("setState no ejecutado");
                }
            }, 2000);
            
        });

    }, [url])

    return state;
}
