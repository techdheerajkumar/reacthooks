import React, { useState, useEffect } from 'react';
import ButtonComponent from '../Atoms/ButtonComponent'
import InputComponent from '../Atoms/InputComponent';
import ListItem from '../Atoms/ListItemComponent';

const EnterField = () => {
    const [useInputValue, setInputValue] = useState({
        name: '',
        id: ''
    });
    const [storeValue, setStoreValue] = useState([]);

    const changeHandler = (e) => {
        setInputValue({
            ...useInputValue,
            name: e.target.value,
            id: Date.now()
        });
    }
    const clickHandler = () => {
        if (useInputValue.name !== "") {
            setStoreValue([...storeValue, useInputValue]);
        }
        setInputValue({
            ...useInputValue,
            name: "",
            id: ""
        })
    }
    //clear selected item    
    const deleteHandler = (data) => {
        setStoreValue(storeValue.filter((list) =>
            list.id !== data))
    }
    return (
        <div>
            <InputComponent
                change={changeHandler}
                emptyVal = {useInputValue.name}
            />
            <ButtonComponent click={clickHandler} />
            <ListItem value={storeValue} click={deleteHandler} />
        </div>
    )
}

export default EnterField;