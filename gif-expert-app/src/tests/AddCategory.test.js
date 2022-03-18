import React from "react";
import "@testing-library/jest-dom";
import { AddCategory } from "../components/AddCategory";
import { shallow } from "enzyme";

describe("Pruebas de AddCategory", () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    test("Mostrar correctamente", () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test("Cambiar valor del textbox", () => {
        const value = "Hola mundo";

        let input = wrapper.find("input");
        input.simulate("change", {
            target: {
                value: value
            }
        });

        input = wrapper.find("input");
        
        expect(input.prop("value")).toMatch(value);
    })

    test("No enviar el formulario", () => {

        wrapper.find("form").simulate("submit", { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test("LLamar setCategories", () => {
        const value = "Naruto";

        let input = wrapper.find("input");
        input.simulate("change", {
            target: {
                value: value
            }
        });

        wrapper.find("form").simulate("submit", { preventDefault(){} });
        expect(setCategories).toHaveBeenCalledTimes(1);

        input = wrapper.find("input");
        expect(input.prop("value")).toMatch("");
    })
})