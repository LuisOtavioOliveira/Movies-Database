import React from 'react'
import './Search.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import SearchMovieCard from '../components/SearchMovieCard'
import SearchSerieCard from '../components/SearchSerieCard'
import SearchPersonCard from '../components/SearchPersonCard'

const Search = () => {

const query = useParams()

const [series, setSeries] = useState([])
const [movies, setMovies] = useState([])
const [people, setPeople] = useState([])
const [type, setType] = useState('movies')


const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);

}

const getSerie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSeries(data.results);

}

const getPerson = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPeople(data.results);

}

useEffect(() => {
    const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&query=${query.query}&page=1&include_adult=false`
    const searchSerieUrl = `https://api.themoviedb.org/3/search/tv?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=1&query=${query.query}&include_adult=false`  
    const searchPersonUrl = `https://api.themoviedb.org/3/search/person?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&query=${query.query}&page=1&include_adult=false`
    getMovie(searchMovieUrl)
    getSerie(searchSerieUrl);
    getPerson(searchPersonUrl)
  },[query]);


  return (
    <div className='search'>
    <div className='type'>
        <h3> Resultado da Busca </h3>
        <div>
        <button onClick={() => setType('movies')}> Filmes <span> {movies.length} </span></button>
        <button onClick={() => setType('series')} > Séries <span> {series.length} </span> </button>
        <button onClick={() => setType('people')} > Pessoas <span> {people.length} </span> </button>
        </div>
    </div>

    <div className='exib'>
    {type == 'movies' && movies.length == 0 && <h2> Não encontramos resultados para essa categoria.</h2>}
{type == 'movies' && movies.length > 0 && movies.map((movie) => <SearchMovieCard movie={movie} ></SearchMovieCard>)}
{type == 'series' && series.length == 0 && <h2> Não encontramos resultados para essa categoria.</h2>}
{type == 'series' && series.length > 0 && series.map((serie) => <SearchSerieCard serie={serie}/>)}
{type == 'people' && people.length > 0 && people.map((person) => <SearchPersonCard person={person}/>)}
{type == 'people' && people.length == 0 && <h2> Não encontramos resultados para essa categoria.</h2>}
    </div>




    </div>
  )
}

export default Search