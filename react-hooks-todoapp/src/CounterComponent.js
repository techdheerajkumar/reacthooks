import React from 'react';

const Counter = (props) => {
    const handleClick = () => props.countHandler(props.incrementValue)
    return (
        <button onClick={handleClick}>
            {props.incrementValue}
        </button>
    )
}

export default Counter;