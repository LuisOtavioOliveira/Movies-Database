import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PopularMovies from './pages/PopularMovies'
import Movie from './pages/Movie'
import Search from './pages/Search'
import OnAirMovies from './pages/OnAirMovies'
import NextMovies from './pages/NextMovies'
import TopRatedMovies from './pages/TopRatedMovies'
import OnTvSeries from './pages/OnTvSeries'
import PopularSeries from './pages/PopularSeries'
import OnAirSeries from './pages/OnAirSeries'
import TopRatedSeries from './pages/TopRatedSeries'
import Serie from './pages/Serie'
import Favorites from './pages/Favorites'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<Route element={<App></App>}>
  <Route path='/' element={<Home/>} ></Route>
  <Route path='/popularmovies' element={<PopularMovies></PopularMovies>}> </Route>
  <Route path='/movie/:id' element={<Movie/>}> </Route>
  <Route path='/search/:query' element={<Search></Search>}> </Route>
  <Route path='/onairmovies' element={<OnAirMovies></OnAirMovies>}> </Route>
  <Route path='/nextmovies' element={<NextMovies></NextMovies>}> </Route>
  <Route path='/topratedmovies' element={<TopRatedMovies></TopRatedMovies>}> </Route>
  <Route path='/ontvseries' element={<OnTvSeries></OnTvSeries>}> </Route>
  <Route path='/onairseries' element={<OnAirSeries></OnAirSeries>}> </Route>
  <Route path='/popularseries' element={<PopularSeries></PopularSeries>}> </Route>
  <Route path='/topratedseries' element={<TopRatedSeries></TopRatedSeries>}> </Route>
  <Route path='/serie/:id' element={<Serie></Serie>}> </Route>
  <Route path='/favorites' element={<Favorites></Favorites>} />
  
</Route>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
