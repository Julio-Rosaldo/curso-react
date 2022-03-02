import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

// Componente que al agregar un actualiza el array "categories"
// del componente principal, lo que desde ahi dispara que se
// renderice una nueva instancia del componente
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const addCategory = (categories) => {
        let categoriesAux = [inputValue];
        Array.prototype.push.apply(categoriesAux, categories);
        setCategories(categoriesAux);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        if (inputValue.trim().length > 0) {
            //setCategories(actualCategories => [...actualCategories, inputValue]);
            setCategories((categories) => {addCategory(categories)});
            setInputValue("");
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <h2>Add Category</h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}>
                </input>
                <p></p>
                <button type="submit">Agregar Categoria</button>
            </form>
        </Fragment>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}