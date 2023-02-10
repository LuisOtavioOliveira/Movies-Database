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
console.log(query)
const [series, setSeries] = useState([])
const [movies, setMovies] = useState([])
const [people, setPeople] = useState([])
const [type, setType] = useState('movies')


const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    console.log(movies)
    return data.results
}

const getSerie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSeries(data.results);
    console.log(series)
    return data.results
}

const getPerson = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPeople(data.results);
    console.log(people)
    return data.results
}

const verifyType = (filmes, tvs, pessoas) => {

if (filmes.length == tvs.length && filmes.length == pessoas.length) {
    setType('movies')

} else if (filmes.length > tvs.length && filmes.length > pessoas.length) {
    setType('movies')

} else if (pessoas.length > filmes.length && pessoas.length > tvs.length) {
    setType('people')

} else if (tvs.length > filmes.length && tvs.length > pessoas.length) {
    setType('series')

} else if (tvs.length > filmes.length && tvs.length == pessoas.length) {
    setType('series')

}
     
} 

const initialFunction = async () => {
    const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&query=${query.query}&page=1&include_adult=false`
    const searchSerieUrl = `https://api.themoviedb.org/3/search/tv?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=1&query=${query.query}&include_adult=false`  
    const searchPersonUrl = `https://api.themoviedb.org/3/search/person?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&query=${query.query}&page=1&include_adult=false`
   const serie = await getMovie(searchMovieUrl)
   const movie = await getSerie(searchSerieUrl);
   const pessoas = await getPerson(searchPersonUrl)
   console.log(movie)
   console.log(movie)
   console.log(pessoas)
    verifyType(serie,movie,pessoas)
}

useEffect(() => {
    initialFunction()
    
  },[query]);


  return (
    <div className='search'>
    <div className='type'>
        <h3> Resultado da Busca </h3>
        <div>
        <button className={type == 'movies' ? 'selectedbutton' : ''} onClick={() => setType('movies')}> Filmes <span> {movies.length} </span></button>
        <button className={type == 'series' ? 'selectedbutton' : ''} onClick={() => setType('series')} > Séries <span> {series.length} </span> </button>
        <button className={type == 'people' ? 'selectedbutton' : ''} onClick={() => setType('people')} > Pessoas <span> {people.length} </span> </button>
        </div>
    </div>

    {query == '' ? <h2> Você não pode deixar o campo de pesquisa em branco. </h2> : <div className='exib'>
    {type == 'movies' && movies.length == 0 && <h2> Não encontramos resultados para essa categoria.</h2>}
{type == 'movies' && movies.length > 0 && movies.map((movie) => <SearchMovieCard movie={movie} ></SearchMovieCard>)}
{type == 'series' && series.length == 0 && <h2> Não encontramos resultados para essa categoria.</h2>}
{type == 'series' && series.length > 0 && series.map((serie) => <SearchSerieCard serie={serie}/>)}
{type == 'people' && people.length > 0 && people.map((person) => <SearchPersonCard person={person}/>)}
{type == 'people' && people.length == 0 && <h2> Não encontramos resultados para essa categoria.</h2>}
    </div>}




    </div>
  )
}

export default Search