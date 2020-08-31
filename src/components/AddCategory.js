import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Agregue una categoría');

    const handleInputChange= (e)=>{
        setInputValue(e.target.value);        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Submit hecho');

        if(inputValue.trim().length>2){
            setCategories((cats)=>[inputValue,...cats]);
            setInputValue('');
        }
    }

    const handleFocus=(e)=>{
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired 
}
