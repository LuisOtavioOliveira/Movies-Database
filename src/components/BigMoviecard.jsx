import React from 'react'
import { FaStar } from "react-icons/fa";
import './MovieCard.css'
import { Link } from 'react-router-dom';
import './BigMovieCard.css'
import { useState } from 'react';
import { useEffect } from 'react';

const BigMovieCard = ({movie, favorite=false}) => {

   const [class1, setClass1] = useState('')
   
   console.log(movie.vote_average)

   useEffect(() => {
      const nota = movie.vote_average
      console.log(nota)
      if (nota < 5) {
         setClass1('low')
      } else if (nota < 8) {
         setClass1('medium')
      } else  {
         setClass1('high')
      }
    },[]);

 const date = movie.release_date
 const year = date.substring(0, 4);
 const day = date.substring(date.length - 2)
 const nummonth = date.slice(5,7)
 let month = ''

 if (nummonth == '01') {
    month = 'Jan'
 } else if (nummonth == '02') {
    month = 'Feb'
 } else if (nummonth == '03') {
    month = 'Mar'
 } else if (nummonth == '04') {
    month = 'Abr'
 } else if (nummonth == '05') {
    month = 'Mai'
 } else if (nummonth == '06') {
    month = 'Jun'
 } else if (nummonth == '07') {
    month = 'Jul'
 } else if (nummonth == '08') {
    month = 'Ago'
 } else if (nummonth == '09') {
    month = 'Set'
 } else if (nummonth == '10') {
    month = 'Out'
 } else if (nummonth == '11') {
    month = 'Nov'
 } else if (nummonth == '12') {
    month = 'Dez'
 } 




  return (
    <div className='big'>
        <div className='norelative'>
        <button className={`buttonfav bigmargin ${favorite && 'favorite'} `}> <FaStar></FaStar> </button>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className='border'>
        <h3 className={class1}> <FaStar></FaStar> <span className='span2'> {movie.vote_average} </span> </h3>
        <h2> <Link> {movie.title}</Link>  </h2>
        <p> {day} de {month} de {year} </p>
        </div>
    </div>
  )
}

export default BigMovieCard