import React from 'react'
import './Background.css'
import {FaStar} from 'react-icons/fa'
import {VscDebugBreakpointData} from 'react-icons/vsc'

const Background = ({movie, cast}) => {

    const stylesDiv = {
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}')`,
        backgroundSize: 'cover',
    }

    const hours = Math.floor(movie.runtime / 60)
    const remainingMinutes = movie.runtime % 60
    const duration = `${hours}h  ${remainingMinutes}min.`


    


    

       
      



  return (
    <div>
      <div className='containerbg' style={stylesDiv}>    
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        <div className='moviedetails'>
            <div>
            <h2> {movie.title} <span>({movie.release_date !== undefined ? movie.release_date.substring(0,4) : movie.release_date })</span> </h2>
            <p>  {movie.release_date !== undefined ? movie.release_date.substring(movie.release_date.length - 2) : movie.release_date }/{movie.release_date !== undefined ? movie.release_date.slice(5,7) : movie.release_date }/{movie.release_date !== undefined ? movie.release_date.substring(0,4) : movie.release_date } <VscDebugBreakpointData/> {movie.genres !== undefined && `${movie.genres.map((genre) => genre.name )}`} <VscDebugBreakpointData/> {duration}  </p>
            </div>
            <h3> <FaStar></FaStar> {movie.vote_average} </h3>
            <h4> <i> {movie.tagline} </i></h4>
            <div>
            <h5> Sinopse </h5>
            <p> {movie.overview} </p>
            </div>
        </div>

    </div>
    <div>
      <h2> {cast.map((actor) => actor.name)} </h2>
    </div>
    </div>
  )
}

export default Background