import React, { useState, useEffect } from 'react';
const FetchDataApiComponent = () => {
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        console.log('use effect working')
    },[])
    return (
        <div>
            fetch movie
        </div>
    )
}
export default FetchDataApiComponent;