import React, { useState, useEffect } from 'react';
import InputField from '../Atoms/InputComponent';
import ButtonComponent from '../Atoms/ButtonComponent';
const MoviePage = () => {
    const [getData, setData] = useState(); //setting on basis of input Value 
    const [movie, setMovie] = useState(); //setting on basic of button click
    const [movieData, setMovieData] = useState(0);


    useEffect(() => {
        
        fetch(`http://www.omdbapi.com/?apikey=20c10bc&t=${movie}`).
            then(response => response.json()).
            then(data => {
                console.log(data)
            }
            );
           
    }, [movie])



    const changeHandler = (e) => {
        setData(e.target.value)
    }

    const clickHandler = () => {
        setMovie(getData);
        
    }
    return (
        <div className="page-wrapper">
            <div className="container">
                Movies Page
                <InputField
                    placeHolder="Enter movie name"
                    change={changeHandler}
                />
                <ButtonComponent btnName="Search" click={clickHandler} />

            </div>
        </div>
    )
}

export default MoviePage;