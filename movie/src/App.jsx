import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Movie from './components/Movie';
import Movies from './components/Movies';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/movie/:id' element={<Movie/>}/>
      </Routes>
    </BrowserRouter>
  )
}
