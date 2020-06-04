import React, { useState } from 'react';

const ButtonComponent = (props) => {

    return (
        <button
            className={`btn col-sm-2 ${props.btnCurrentState ? 'btn-danger' : 'btn-success'}`}
            onClick={props.click}
            disabled={props.btnCurrentState}>
            {props.btnName}
        </button>
    )

}

export default ButtonComponent;