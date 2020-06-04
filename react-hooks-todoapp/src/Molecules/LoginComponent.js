import React, { useState } from 'react';
import ButtonComponent from '../Atoms/ButtonComponent';
import InputComponent from '../Atoms/InputComponent';
import {useHistory} from 'react-router-dom';

const FormComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [btnState, setBtnState] = useState (true);
   
    const changeHandler = (e) =>{
        if(e.target.value !== ''){
            setBtnState(false)
        }
        setInputValue({
            ...inputValue,
            name : e.target.value
        })

    }
    const history = useHistory();
    const clickHandler = () =>{       
        setBtnState(true)
        setInputValue({
            ...inputValue,
            name : ""
        });
        
        if(!btnState){
            history.push('/todo');
        }
    }


    return (
        <div className="login-container">
            <InputComponent change = {changeHandler} emptyVal = {inputValue.name} placeHolder = "Enter your name"/>
            <ButtonComponent click = {clickHandler} btnCurrentState ={btnState} btnName = {"login"}/>
        </div>
    )
}

export default FormComponent;