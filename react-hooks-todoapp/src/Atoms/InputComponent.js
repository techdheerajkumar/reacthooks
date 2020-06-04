import React, {useState} from 'react';

const InputComponent = (props) => {
  

    return (
        <input 
        type="text"
        placeholder = {props.placeHolder}
        onChange = {props.change}  
        className = "form-group"
      />
    )
}

export default InputComponent;