import React, {useState} from 'react';

const InputComponent = (props) => {
  

    return (
        <input 
        type="text"
        placeholder = "enter here"
        onChange = {props.change}        
      />
    )
}

export default InputComponent;