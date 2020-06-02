import React, {useState, useEffect} from 'react';
import ButtonComponent from '../Atoms/ButtonComponent'
import InputComponent from '../Atoms/InputComponent'

const EnterField = () => {
    let [useInput, setInput] = useState();
    

    const changeHandler = (e) => {
        setInput(useInput = e.target.value)
    }

    const clickHandler = () =>{
        console.log(useInput)
    }

    
    return(
        <div>
            <InputComponent 
                change = {changeHandler}
            />
            <ButtonComponent click = {clickHandler}/>
        </div>
    )
}

export default EnterField;