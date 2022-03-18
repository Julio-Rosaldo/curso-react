import React from "react";
import "@testing-library/jest-dom";
import { GifExpertApp } from "../GifExpertApp";
import { shallow } from "enzyme";

import { useFetchGifs } from "../hooks/useFetchGifs";
jest.mock("../hooks/useFetchGifs");

describe("Pruebas en ", () => {

    test("Mostrar componente correctamente", () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    })

    test("Mostrar lista de categorias", () => {
        const categories = ["Naruto", "One Piece"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
    })

})