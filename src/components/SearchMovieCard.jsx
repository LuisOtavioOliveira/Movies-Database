import React from 'react'
import { Link } from 'react-router-dom';
import './SearchMovieCard.css'

const SearchMovieCard = ({movie}) => {

    const date = movie.release_date
    const year = date.substring(0, 4);
    const day = date.substring(date.length - 2)
    const nummonth = date.slice(5,7)
    const string = movie.overview.substring(0,260)
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
    <div className='searchmoviecard'>
<img src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg` } alt={movie.title} />
<div className='otherinfos'>
<div>
<Link className='backspace'> {movie.title} </Link>
    <h3 className='backspace'> {day !== '' &&  `${day} de ${month} de ${year}` } </h3>
</div>
    <p className='backspace'> {movie.overview} </p>
</div>
    </div>
  )
}

export default SearchMovieCard