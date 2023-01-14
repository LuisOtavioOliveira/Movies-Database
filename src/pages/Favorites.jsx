import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import BigMovieCard from '../components/BigMoviecard'
import BigSerieCard from '../components/BigSerieCard'
import Loading from '../components/Loading'
import SearchMovieCard from '../components/SearchMovieCard'
import './Favorites.css'

const Favorites = () => {

    const [type, setType] = useState('movies')
    const [favoriteMovies, setFavoriteMovies] = useState([])
    const [favoriteSeries, setFavoriteSeries] = useState([])

    const changeType = (button) => {
if (button == 'movies') {
    if (type == 'movies') {
        return
    } else {
        setType('movies')
        document.getElementById('series').classList.remove('selectedbutton')
        document.getElementById('movies').classList.add('selectedbutton')
    } 
    
} 
 else if (button == 'series') {
    if (type == 'series') {
        return
    } else {
        setType('series')
        document.getElementById('movies').classList.remove('selectedbutton')
        document.getElementById('series').classList.add('selectedbutton')
    } 
    
}

    }

    function getFavorites() {
        const items = {};
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          items[key] = JSON.parse(localStorage.getItem(key));
        }
        return items;
      }


      useEffect(() => {
        const favoriteMovies = getFavorites()
        setFavoriteMovies(Object.values(favoriteMovies).filter((movie) => movie.title !== undefined))
        setFavoriteSeries(Object.values(favoriteMovies).filter((movie) => movie.name !== undefined))
      },[type]);

  return (
<div className='favoritescontainer'>
    <div className='favoritesbuttons'>
        <button id='movies' className='selectedbutton' onClick={() => changeType('movies')}> Filmes </button>
        <button id='series' onClick={() => changeType('series')}> Séries </button>
    </div>
<div className='favoritesexib'>
        {type == 'movies' ? favoriteMovies.length > 0 ? favoriteMovies.map((movie) => <BigMovieCard movie={movie} favorite={true} />) : <h2> Você não adicionou nenhum filme aos favoritos. </h2>  : <></>}
        {type == 'series' ? favoriteSeries.length > 0 ? favoriteSeries.map((movie) => <BigSerieCard movie={movie} favorite={true} />) : <h2> Você não adicionou nenhuma série aos favoritos. </h2>  : <></>}
    </div>
</div>
    
  )
}

export default Favorites