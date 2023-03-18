import React, { useLayoutEffect } from 'react'
import './Background.css'
import {FaStar} from 'react-icons/fa'
import {VscDebugBreakpointData} from 'react-icons/vsc'
import PersonCard from '../components/PersonCard'
import { useState } from 'react'
import { useEffect } from 'react'

const Background = ({movie, cast, favorite}) => {


  const [isFavorite, setIsFavorite] = useState(favorite)
  const [textButton, setTextButton] = useState('')

 


    const stylesDiv = {
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}')`,
        backgroundSize: 'cover',
    }

    const hours = Math.floor(movie.runtime / 60)
    const remainingMinutes = movie.runtime % 60
    const duration = `${hours}h  ${remainingMinutes}min.`

    function storeItem(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

   function handleFavoriteClick() {
     setIsFavorite(!isFavorite);
     if (isFavorite) {
       localStorage.removeItem(movie.id);
       setTextButton('Adicionar aos favoritos')
     } else {
       storeItem(movie.id, movie);
       
       setTextButton('Remover dos Favoritos')
     }
     
   }


   
   const SetButton = (fav) => {

    if (fav == true) {
      setTextButton('Remover dos Favoritos')
    } else {
      setTextButton('Adicionar aos favoritos')
    }


   }

  

   useEffect(() => {
    setIsFavorite(favorite)
  SetButton(favorite)
  window.scrollTo(0, 0);
    
  },[favorite]);

  return (
    <div>
      <div className='containerbg' style={stylesDiv}>    
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        
        <div className='moviedetails'>
            <div>
           
            <h2> {movie.title} <span>({movie.release_date !== undefined ? movie.release_date.substring(0,4) : movie.release_date })</span> </h2>
            <p>  {movie.release_date !== undefined ? movie.release_date.substring(movie.release_date.length - 2) : movie.release_date }/{movie.release_date !== undefined ? movie.release_date.slice(5,7) : movie.release_date }/{movie.release_date !== undefined ? movie.release_date.substring(0,4) : movie.release_date } <VscDebugBreakpointData/> {movie.genres !== undefined && `${movie.genres.map((genre) => genre.name )}`} <VscDebugBreakpointData/> {duration}  </p>
            </div>
            <div className='aga3'> <h3> <FaStar></FaStar> {movie.vote_average} </h3> <VscDebugBreakpointData></VscDebugBreakpointData>  <button aria-label="Favoritar." onClick={handleFavoriteClick} className={`favoritebutton ${isFavorite && 'selectedfavorite'}`}> {textButton} </button>  </div>
            <h4> <i> {movie.tagline} </i></h4>
            <div>
            <h5> Sinopse </h5>
            <p> {movie.overview} </p>
            </div>
        </div>

    </div>
    <div className='castinfos'>
      <h2> Elenco principal </h2>
      <div className='persons'>
      {cast.map((person) =>  <PersonCard person={person} /> )}
      </div>
    </div>
    </div>
  )
}

export default Background