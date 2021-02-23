import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( event ) => {
        setInputValue( event.target.value );
        console.log('handleInputChange llamado');
    };

    const handleSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length > 2 ) {
            setCategories( categories => [inputValue, ...categories] );
            setInputValue('');
        }
    };
    
    return (
        <form onSubmit={ handleSubmit } >
            <p>{inputValue}</p>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};