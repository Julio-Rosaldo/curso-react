import React, { useLayoutEffect, useRef } from 'react'
import { UseCounter } from '../hooks/UseCounter';
import { UseFetch } from '../hooks/UseFetch'
import "./Layout.css";

export const LayoutEffect = () => {

    const {count, increment} = UseCounter(1);

    console.log(count);

    const url = "https://breakingbadapi.com/api/quotes/" + count.toString();

    const state = UseFetch(url);
    const {loading, error, data} = state;

    //const {author, quote} = !!data && data[0];
    let quote;
    if (data != null){
        quote = data[0];
    }
    console.log(quote);

    const pRef = useRef();

    useLayoutEffect( () => {
        console.log(pRef);
        if (!loading) {
            console.log(pRef.current.clientWidth);
        }   
    }, [quote])

  return (
    <div>
        <h1>Breaking Bad Quotes</h1>

{
    loading? (
    <div className="alert alert-info text-center">Loading...</div>
    )
    : 
    (
        <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pRef}>{quote.quote}</p>
        <p></p>
        <footer className="blockquote-footer">{quote.author}</footer>
        </blockquote>
    )
}


<p>{count}</p>
        
        <button className="btn btn-primary" onClick={() => increment()}>Siguiente</button>
        
        
    </div>
  )
}
