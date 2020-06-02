import React, { useState, useEffect } from 'react';
import ButtonComponent from '../Atoms/ButtonComponent'
import InputComponent from '../Atoms/InputComponent';
import ListItem from '../Atoms/ListItemComponent';
import { array } from 'prop-types';

const EnterField = () => {
    const [useInputValue, setInputValue] = useState({
        name: '',
        id: ''
    });
    const [storeValue, setStoreValue] = useState([1,2])


    const changeHandler = (e) => {
        setInputValue({
            ...useInputValue,
            name: e.target.value,
            id: Date.now()
        });
    }


    const clickHandler = () => {
        setStoreValue([...storeValue, useInputValue])
        console.log(storeValue)
    }

    //clear selected item
    const deleteHandler = (data) => {
        const demo = storeValue.filter(list => {
            return list.id !== data
        });
        
        
    }

 
    return (
        <div>
            <InputComponent
                change={changeHandler}
            />
            <ButtonComponent click={clickHandler} />
            <ListItem value={storeValue} click={deleteHandler} />
        </div>
    )
}

export default EnterField;