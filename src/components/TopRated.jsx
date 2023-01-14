import React from 'react'
import './TopRated.css'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SeriesCard from './SeriesCard';
import Loading from './Loading';

const TopRated = () => {


    const [topMovies, setTopMovies] = useState([]);
    const [topSeries, setTopSeries] = useState([])
    const [type, setType] = useState('movies')
    const [favorites, setFavorites] = useState([])

    
    

    function getFavorites() {
      const items = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        items[key] = JSON.parse(localStorage.getItem(key));
      }
      return items;
    }


  

    const getTopRatedMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setTopMovies(data.results);

    };

    const getTopRatedSeries = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopSeries(data.results);

      };
  
    useEffect(() => {
      const topRatedUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=1'
      const topSeriesUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=1'  
      const favoriteMovies = getFavorites()
      setFavorites(Object.values(favoriteMovies))
      console.log(favorites);
      getTopRatedSeries(topSeriesUrl)
      getTopRatedMovies(topRatedUrl);
      

    },[]);

    

  return (
    <div className='toprated'>
        <div className='categories'>
            <h2> Os Mais Populares </h2>
            <div className='buttonsdiv'>
                <p className={type == 'movies' && 'active'}  onClick={() => setType('movies')} >Filmes</p>
                <p className={type == 'series' && 'active'} onClick={() => setType('series')} >Séries</p>
            </div>
        </div>
        <div className='moviesexib'>
            {topMovies.length == 0 ? <Loading></Loading> : type == 'movies' && topMovies.map((movie) =>  favorites.find((fav) => fav.id === movie.id) ? <MovieCard favorite={true} movie={movie} ></MovieCard> :  <MovieCard movie={movie}> </MovieCard> ) }
            {type == 'series' && 
            topSeries.map((movie) => favorites.find((fav) => fav.id === movie.id) ? <SeriesCard favorite={true} movie={movie} ></SeriesCard> :  <SeriesCard movie={movie}> </SeriesCard>)
            }
            
        </div>
        
    </div>
  )
}

export default TopRated