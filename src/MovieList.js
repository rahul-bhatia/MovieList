import React from 'react';


function MovieList(props){
    return(
    <div>
        <h1>{props.name}</h1>
        <p>{props.amount}</p>
    </div>
    );
}

export default MovieList;