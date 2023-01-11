import React from 'react'
import { useParams } from 'react-router-dom'
import './Movie.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Background from './Background'
import MobileSerie from './MobileSerie'
import BackgroundSerie from './BackgroundSerie'

const Serie = () => {

  const [serie, setSerie] = useState([])
  
  
const id = useParams()
console.log(id.id)

const getSerie = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  setSerie(data)

}


useEffect(() => {
  const urlMovie = `https://api.themoviedb.org/3/tv/${id.id}?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR`
  getSerie(urlMovie)
  

},[]);



  return (

<div className='Moviecontainer' >
      <div className='pcversion'>
      <BackgroundSerie serie={serie} />
      </div>
      <div className='mobileversion'>
        <MobileSerie serie={serie}/>
      </div>
    </div>

  )
}

export default Serie