import React from "react";
import "@testing-library/jest-dom";
import { ImageItem } from "../components/ImageItem";
import { shallow } from "enzyme";

describe("Pruebas en ", () => {

    const image = {
        title: "Titulo",
        url: "Enlace"
    }

    const wrapper = shallow(<ImageItem image={image}/>);

    test("Mostrar componente correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    })

    test("El titulo debe coincidir", () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(image.title);
    })

    test("Los atributos de la imagen deben coincidir", () => {
        const img = wrapper.find("img");
        expect(img.prop("src")).toBe(image.url);
        expect(img.prop("alt")).toBe(image.title);
    })

    test("El componente debe contener un atributo", () => {
        const div = wrapper.find("div");
        expect(div.prop("className").includes("animate")).toBe(true);
    })

})