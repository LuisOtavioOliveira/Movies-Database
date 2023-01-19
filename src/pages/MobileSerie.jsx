import React from 'react'
import { FaStar } from 'react-icons/fa'
import {VscDebugBreakpointData} from 'react-icons/vsc'
import PersonCard from '../components/PersonCard'
import { useEffect, useState } from 'react'

const MobileSerie = ({movie , cast, favorite}) => {

  const [textButton, setTextButton] = useState('')
  const [isFavorite, setIsFavorite] = useState(favorite)

    const stylesDiv = {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
        backgroundPosition: 'center, center' ,
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
    <div className='containermobile'>
    <div className='mobilediv' style={stylesDiv}>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
</div>
<div className='infosmobile'>
 <div className='titleinfo'>
 <h2> {movie.name}  <span>({movie.first_air_date !== undefined ? movie.first_air_date.substring(0,4) : movie.first_air_date })</span> </h2>
 <h3> <FaStar></FaStar> {movie.vote_average} <span> <VscDebugBreakpointData/> </span> <button onClick={handleFavoriteClick} className={`mobilefavoritebutton ${isFavorite && 'favoritedmobile'}`}> {textButton} </button> </h3>
 </div>
 <div className='datainfo'>
    <p>  {movie.first_air_date !== undefined ? movie.first_air_date.substring(movie.first_air_date.length - 2) : movie.first_air_date }/{movie.first_air_date !== undefined ? movie.first_air_date.slice(5,7) : movie.first_air_date }/{movie.first_air_date !== undefined ? movie.first_air_date.substring(0,4) : movie.first_air_date }  </p>  
    <p> {movie.genres !== undefined && `${movie.genres.map((genre) => genre.name )}`} </p>
    
 </div>

 <div className='sinopseinfo'>
 <h4> <i> {movie.tagline}</i>  </h4>
    <h5> Sinopse </h5>
    <p> {movie.overview} </p>
 </div>
</div>
<div className='castmobile'>
      <h2> Elenco principal </h2>
      <div className='persons'>
      {cast.map((person) =>  <PersonCard person={person} /> )}
      </div>
    </div>
</div>
  )
}

export default MobileSerie