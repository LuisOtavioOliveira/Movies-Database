import React from 'react'
import { FaStar } from 'react-icons/fa'
import './MobileMovie.css'
import {VscDebugBreakpointData} from 'react-icons/vsc'

const MobileMovie = ({movie}) => {


    const hours = Math.floor(movie.runtime / 60)
    const remainingMinutes = movie.runtime % 60
    const duration = `${hours}h  ${remainingMinutes}min.`

    const stylesDiv = {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
        backgroundPosition: 'center, center' ,
    }



  return (
    <div className='containermobile'>
        <div className='mobilediv' style={stylesDiv}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
    </div>
    <div className='infosmobile'>
     <div className='titleinfo'>
     <h2> {movie.title}  <span>({movie.release_date !== undefined ? movie.release_date.substring(0,4) : movie.release_date })</span> </h2>
     <h3> <FaStar></FaStar> {movie.vote_average} <span> <VscDebugBreakpointData/> </span> {duration} </h3>
     </div>
     <div className='datainfo'>
        <p>  {movie.release_date !== undefined ? movie.release_date.substring(movie.release_date.length - 2) : movie.release_date }/{movie.release_date !== undefined ? movie.release_date.slice(5,7) : movie.release_date }/{movie.release_date !== undefined ? movie.release_date.substring(0,4) : movie.release_date }  </p>  
        <p> {movie.genres !== undefined && `${movie.genres.map((genre) => genre.name )}`} </p>
        
     </div>

     <div className='sinopseinfo'>
     <h4> <i> {movie.tagline}</i>  </h4>
        <h5> Sinopse </h5>
        <p> {movie.overview} </p>
     </div>
    </div>
    </div>
  )
}

export default MobileMovie