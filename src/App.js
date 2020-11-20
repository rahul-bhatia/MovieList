import React ,{useState} from 'react';
import {MovieProvider} from './MovieContext';
import Movies from './Movies';
import AddMovie from './AddMovie';


function App() {
  
  return (
    <div>
      <MovieProvider>
        <AddMovie />
        <Movies />
      </MovieProvider>
    </div>
  );
}

export default App;
