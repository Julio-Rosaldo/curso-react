import React from "react";
import "@testing-library/jest-dom";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { shallow } from "enzyme";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en ", () => {

    test("Regresar estado inicial", () => {
        const {result} = renderHook( () => useFetchGifs("Naruto") );
        const {data, loading} = result.current;
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test("Regresar datos", async() => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs("Naruto") );
        await waitForNextUpdate();

        const {data, loading} = result.current;
        console.log(data, loading);
        
        expect(data.length).toEqual(5);
        expect(loading).toBe(false);
    })

})