import React, {useState} from 'react';

const ListItemComponent = (props) =>{
    const demo = props.value.map((data,index) => {
        return (
            <p onClick = {() => props.click(data.id)} key={index}>{data.name}</p>
        )
    })
    return(
       <>
        {demo}
       </>
    )
}

export default ListItemComponent;