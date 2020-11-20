import React,{useState,createContext} from 'react';


export const MovieContext=createContext();

export const MovieProvider = (props) =>{
    const [movies,setMovies] = useState(
        [
          { name: 'harry potter',price:'10rs',id:'123' },
          { name: 'got',price:'40rs',id:'1234' },
          { name: 'stark',price:'50rs',id:'12345' }
        ]
      );

      return(
          <MovieContext.Provider value={[movies,setMovies]}>
              {props.children}
          </MovieContext.Provider>
      );

}