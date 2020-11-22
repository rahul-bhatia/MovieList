import React ,{useState} from 'react';
import {MovieProvider} from './MovieContext';
import Movies from './Movies';
import AddMovie from './AddMovie';
import {Counter } from './Counter';
import {useSelector,useDispatch} from 'react-redux';


function App() {
  
  const counterR =useSelector(state => state.counter)

  return (
    <div>
      <MovieProvider>
        <h1>{counterR}</h1>
        <Counter />
        <AddMovie />
        <Movies />
      </MovieProvider>
    </div>
  );
}

export default App;
