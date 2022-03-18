import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { listGifs } from "../Helpers/ListGifs";

describe("Pruebas de listGifs", () => {

    test("Obtener 5 elementos", async () => {
        const images = await listGifs("Naruto");
        console.log(JSON.stringify(images));
        expect(images.length).toBe(5);
    })

    test("Obtener x elementos", async () => {
        const images = await listGifs("");
        expect(images.length).toBe(0);
    })

})