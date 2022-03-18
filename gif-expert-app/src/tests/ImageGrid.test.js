import React from "react";
import "@testing-library/jest-dom";
import { ImageGrid } from "../components/ImageGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../hooks/useFetchGifs";
jest.mock("../hooks/useFetchGifs");

describe("Pruebas en ", () => {

    const category = "Naruto";

    

    test("Mostrar componente correctamente", () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<ImageGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test("Renderizar imagenes al terminar su carga", () => {

        const images = [
            {
                id: "01",
                url: "www.algo.com",
                title: "Naruto"
            },
            {
                id: "02",
                url: "www.algo.com",
                title: "One Piece"
            }
        ];

        useFetchGifs.mockReturnValue({
            data: images,
            loading: false
        });
        
        const wrapper = shallow(<ImageGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find("p").exists() ).toBe(false);
        expect( wrapper.find("ImageItem").exists() ).toBe(true);
    })

})