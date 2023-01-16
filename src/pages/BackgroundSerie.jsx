import React from 'react'
import './Background.css'
import {FaStar} from 'react-icons/fa'
import {VscDebugBreakpointData} from 'react-icons/vsc'
import { useState, useEffect } from 'react'
import PersonCard from '../components/PersonCard'

const BackgroundSerie = ({movie, cast, favorite}) => {

  const [isFavorite, setIsFavorite] = useState()
  const [textButton, setTextButton] = useState('')

    const stylesDiv = {
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}')`,
    
    }

    

    
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
        console.log('Remove')
      } else {
        setTextButton('Adicionar aos favoritos')
        console.log('add')
        console.log(fav)
      }
  
  
     }
       
      

    useEffect(() => {
      setIsFavorite(favorite)
    SetButton(favorite)
      
    },[favorite]);

  return (
    <div>
    <div className='containerbg' style={stylesDiv}>    
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        <div className='moviedetails'>
            <div>
            <h2> {movie.name} <span>({movie.first_air_date !== undefined ? movie.first_air_date.substring(0,4) : movie.first_air_date })</span> </h2>
            <p>  {movie.first_air_date !== undefined ? movie.first_air_date.substring(movie.first_air_date.length - 2) : movie.first_air_date }/{movie.first_air_date !== undefined ? movie.first_air_date.slice(5,7) : movie.first_air_date }/{movie.first_air_date !== undefined ? movie.first_air_date.substring(0,4) : movie.first_air_date } <VscDebugBreakpointData/> {movie.genres !== undefined && `${movie.genres.map((genre) => genre.name )}`}   </p>
            </div>
            <div className='aga3'> <h3> <FaStar></FaStar> {movie.vote_average} </h3> <VscDebugBreakpointData></VscDebugBreakpointData>  <button onClick={handleFavoriteClick} className={`favoritebutton ${isFavorite && 'selectedfavorite'}`}> {textButton} </button>  </div>
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

export default BackgroundSerie