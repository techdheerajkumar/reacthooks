import React, { useState } from 'react';
import ButtonComponent from '../Atoms/ButtonComponent';
import InputComponent from '../Atoms/InputComponent';
const FormComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [btnState, setBtnState] = useState (true);
    const clickHandler = () =>{       
        setBtnState(true)
        setInputValue({
            ...inputValue,
            name : ""
        })
    }

    const changeHandler = (e) =>{
        if(e.target.value !== ''){
            setBtnState(false)
        }
        setInputValue({
            ...inputValue,
            name : e.target.value
        })
    }
    return (
        <div>
            <InputComponent change = {changeHandler} emptyVal = {inputValue.name}/>
            <ButtonComponent click = {clickHandler} btnCurrentState ={btnState} btnName = {"login"}/>
        </div>
    )
}

export default FormComponent;