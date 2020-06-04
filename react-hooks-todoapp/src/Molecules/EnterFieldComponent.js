import React, { useState, useEffect } from 'react';
import ButtonComponent from '../Atoms/ButtonComponent'
import InputComponent from '../Atoms/InputComponent';
import ListItem from '../Atoms/ListItemComponent';
import { useLocation, useHistory } from 'react-router-dom';
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

    //Back button
    const history = useHistory();
    const goBackHandle = () => {
        history.goBack();
    }
    return (
        <div className="todo-container">
            <InputComponent
                change={changeHandler}
                emptyVal={useInputValue.name}
                placeHolder = "Enter a todo item"
            />
            <div className="btn-container">
                <ButtonComponent click={clickHandler} btnName={"Add a Todo"} />
                <ButtonComponent click={goBackHandle} btnName={"Go Back"} />
            </div>
            <ListItem value={storeValue} click={deleteHandler} />
        </div>
    )
}

export default EnterField;