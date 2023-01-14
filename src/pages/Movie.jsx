import React from 'react'
import { useParams } from 'react-router-dom'
import './Movie.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Background from './Background'
import MobileMovie from './MobileMovie'

const Movie = () => {

  const [movie, setMovie] = useState([])
  const [cast, setCast] = useState([])
  const [favorites, setFavorites] = useState([])
  
  
  function getFavorites() {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      items[key] = JSON.parse(localStorage.getItem(key));
    }
    return items;
  }

const id = useParams()
console.log(id.id)

const getMovie = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  

  setMovie(data)

}

const getCast = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  setCast(data.cast)
}


useEffect(() => {
  const urlMovie = `https://api.themoviedb.org/3/movie/${id.id}?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR`
  const urlActors = `https://api.themoviedb.org/3/movie/${id.id}/credits?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR`
  window.scrollTo(0, 0);
  getMovie(urlMovie)
  getCast(urlActors)
  const favoriteMovies = getFavorites()
  setFavorites(Object.values(favoriteMovies))
  
  

},[]);



  return (

    <div className='Moviecontainer' >
      <div className='pcversion'>
      <Background favorite={favorites.find((fav) => fav.id === movie.id) ? true : false} cast={cast} movie={movie} />
      </div>
      <div className='mobileversion'>
        <MobileMovie favorite={favorites.find((fav) => fav.id === movie.id) ? true : false} cast={cast} movie={movie}/>
      </div>
    </div>
  )
}

export default Movie