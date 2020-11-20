import React,{useState,useContext} from 'react';
import MovieList from './MovieList';
import {MovieContext} from './MovieContext';


function Movies (){
    const [movies,setMovies] =useContext(MovieContext); 
    return(
        <div>
        {movies.map( movie => {
            return(<MovieList name={movie.name} amount={movie.price} key= {movie.id}/>)
          })}
          </div>
    );
}

export default Movies;