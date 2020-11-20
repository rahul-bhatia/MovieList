import React,{useContext,useState} from 'react';
import {MovieContext} from './MovieContext';

function AddMovie (){

    const [name,setName] = useState("");
    const [amount,setAmount] = useState(0);
    const [movies,setMovies] = useContext(MovieContext);

    function handleAdd(event){
        event.preventDefault();
        setMovies(preMovies => ([...preMovies,{name:name,price:amount,id:amount+152}]));

    }

    return(
        <div>
            <input type="text" placeholder="Enter Name" value={name} onChange={ (e)=> setName(e.target.value) }>
            </input>
            
            <input type="text" placeholder="Enter Price" value={amount} onChange={ (e)=> setAmount(e.target.value) }>
            </input>

            <button type="submit" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default AddMovie;