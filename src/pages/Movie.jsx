import React from 'react'
import { useParams } from 'react-router-dom'
import './Movie.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Background from './Background'
import MobileMovie from './MobileMovie'

const Movie = () => {

  const [movie, setMovie] = useState([])
  
  
const id = useParams()
console.log(id.id)

const getMovie = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  setMovie(data)

}


useEffect(() => {
  const urlMovie = `https://api.themoviedb.org/3/movie/${id.id}?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR`
  window.scrollTo(0, 0);
  getMovie(urlMovie)
  

},[]);



  return (

    <div className='Moviecontainer' >
      <div className='pcversion'>
      <Background movie={movie} />
      </div>
      <div className='mobileversion'>
        <MobileMovie movie={movie}/>
      </div>
    </div>
  )
}

export default Movie