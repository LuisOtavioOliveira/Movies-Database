import React from 'react'
import { FaStar } from 'react-icons/fa'
import {VscDebugBreakpointData} from 'react-icons/vsc'

const MobileSerie = ({serie}) => {


    const stylesDiv = {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/w500/${serie.backdrop_path})`,
        backgroundPosition: 'center, center' ,
    }



  return (
    <div className='containermobile'>
    <div className='mobilediv' style={stylesDiv}>
    <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt="" />
</div>
<div className='infosmobile'>
 <div className='titleinfo'>
 <h2> {serie.name}  <span>({serie.first_air_date !== undefined ? serie.first_air_date.substring(0,4) : serie.first_air_date })</span> </h2>
 <h3> <FaStar></FaStar> {serie.vote_average}  </h3>
 </div>
 <div className='datainfo'>
    <p>  {serie.first_air_date !== undefined ? serie.first_air_date.substring(serie.first_air_date.length - 2) : serie.first_air_date }/{serie.first_air_date !== undefined ? serie.first_air_date.slice(5,7) : serie.first_air_date }/{serie.first_air_date !== undefined ? serie.first_air_date.substring(0,4) : serie.first_air_date }  </p>  
    <p> {serie.genres !== undefined && `${serie.genres.map((genre) => genre.name )}`} </p>
    
 </div>

 <div className='sinopseinfo'>
    <h5> Sinopse </h5>
    <p> {serie.overview} </p>
 </div>
</div>
</div>
  )
}

export default MobileSerie