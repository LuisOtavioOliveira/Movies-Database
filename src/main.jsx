import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PopularMovies from './pages/PopularMovies'
import Movie from './pages/Movie'
import Search from './pages/Search'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<Route element={<App></App>}>
  <Route path='/' element={<Home/>} ></Route>
  <Route path='/popular' element={<PopularMovies></PopularMovies>}> </Route>
  <Route path='/movie/:id' element={<Movie/>}> </Route>
  <Route path='/search/:query' element={<Search></Search>}> </Route>
</Route>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
