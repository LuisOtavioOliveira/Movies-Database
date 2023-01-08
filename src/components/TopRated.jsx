import React from 'react'
import './TopRated.css'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SeriesCard from './SeriesCard';
import Loading from './Loading';

const TopRated = () => {


    const favorites = ['Wandinha', 'Glass Onion: Um Mistério Knives Out', 'Yellowstone']
    const [topMovies, setTopMovies] = useState([]);
    const [topSeries, setTopSeries] = useState([])
    const [type, setType] = useState('movies')

    const getTopRatedMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setTopMovies(data.results);
      console.log(topMovies)
    };

    const getTopRatedSeries = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopSeries(data.results);
        console.log(topMovies)
      };
  
    useEffect(() => {
      const topRatedUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=1'
      const topSeriesUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=1'  
      console.log(topRatedUrl);
      getTopRatedSeries(topSeriesUrl)
      getTopRatedMovies(topRatedUrl);
    },[]);

    const firstfive = topMovies.slice(0,7);
    const firstseries = topSeries.slice(0,7);

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
            {topMovies.length == 0 ? <Loading></Loading> : type == 'movies' && topMovies.map((movie) => favorites.indexOf(movie.title) == -1 ? <MovieCard movie={movie}></MovieCard> : <MovieCard favorite={true} movie={movie} ></MovieCard>) }
            {type == 'series' && 
            topSeries.map((movie) => favorites.indexOf(movie.name) == -1 ? <SeriesCard movie={movie}></SeriesCard> : <SeriesCard favorite={true} movie={movie} ></SeriesCard>)
            }
            
        </div>
        
    </div>
  )
}

export default TopRated