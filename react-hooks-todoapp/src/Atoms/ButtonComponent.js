import React, { useState } from 'react';

const ButtonComponent = (props) => {

    return (
        <button onClick = {props.click} disabled = {props.btnCurrentState}>{props.btnName}</button>
    )

}

export default ButtonComponent;