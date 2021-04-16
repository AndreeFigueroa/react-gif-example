import React, { useState } from 'react'
import PropTypes from "prop-types";

const CategoryAdd = ( {setTeam} ) => {
    const [inputvalue, setinputvalue] = useState('');
    const handleInputChange = (e) =>{
        setinputvalue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!inputvalue) {
             alert('Ingrese valor');
             return;
        }
        setTeam(team => [inputvalue]);
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input 
                type="text" 
                value={ inputvalue }
                onChange={ handleInputChange }
            />
            
        </form>
    )
}

CategoryAdd.protoTypes = {
    setTeam: PropTypes.func.isRequired
}

export default CategoryAdd;
