import React from 'react'
import './Background.css'
import {FaStar} from 'react-icons/fa'
import {VscDebugBreakpointData} from 'react-icons/vsc'

const BackgroundSerie = ({serie}) => {

    const stylesDiv = {
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${serie.backdrop_path}')`,
    

    
    }

    



    

       
      



  return (
    <div className='containerbg' style={stylesDiv}>    
        <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt="" />
        <div className='moviedetails'>
            <div>
            <h2> {serie.name} <span>({serie.first_air_date !== undefined ? serie.first_air_date.substring(0,4) : serie.first_air_date })</span> </h2>
            <p>  {serie.first_air_date !== undefined ? serie.first_air_date.substring(serie.first_air_date.length - 2) : serie.first_air_date }/{serie.first_air_date !== undefined ? serie.first_air_date.slice(5,7) : serie.first_air_date }/{serie.first_air_date !== undefined ? serie.first_air_date.substring(0,4) : serie.first_air_date } <VscDebugBreakpointData/> {serie.genres !== undefined && `${serie.genres.map((genre) => genre.name )}`}   </p>
            </div>
            <h3> <FaStar></FaStar> {serie.vote_average} </h3>
            <div>
            <h5> Sinopse </h5>
            <p> {serie.overview} </p>
            </div>
        </div>

    </div>
  )
}

export default BackgroundSerie