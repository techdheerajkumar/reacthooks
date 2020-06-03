import React, {useState} from 'react';

const InputComponent = (props) => {
  

    return (
        <input 
        type="text"
        placeholder = "enter here"
        onChange = {props.change}  
        value = {props.emptyVal}      
      />
    )
}

export default InputComponent;