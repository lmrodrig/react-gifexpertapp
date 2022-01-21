import React, { useState } from 'react'
import PropTypes from 'prop-types';    

export const AddCategory = ({setCategories}) => {
    //el estado default se debe de declarar sino sera undefined
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);

    }

    const handleSubmit = (e) =>{
        //para quedarnos en la misma ruta sin agregar /? al path
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue,...cats]);
            setInputValue('');
        }
        
        
    }

    return (
        <form onSubmit={handleSubmit}>
            
           <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
           />
        </form>
    )
    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired 
    
}