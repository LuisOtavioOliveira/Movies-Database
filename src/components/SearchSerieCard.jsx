import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchSerieCard = ({serie}) => {

    const [date, setDate] = useState('')

 

    const FilterData = () => {
        const date = serie.first_air_date
        if (date !== undefined) {
            const year = date.substring(0, 4);
            const day = date.substring(date.length - 2)
            const nummonth = date.slice(5,7)
            let month
           
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
            return setDate(`${day} de ${month} de ${year}`)
        }
        
    }

    useEffect(() => {
        FilterData()
      },[]);
    

    
  return (
    <div className='searchmoviecard'>
<img src={serie.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${serie.poster_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg` } alt={serie.name} />
<div className='otherinfos'>
<div>
<Link to={`/serie/${serie.id}`}> {serie.name} </Link>
    <h3> {date} </h3>
</div>
    <p className='backspace'> {serie.overview} </p>
</div>
    </div>
  )
}

export default SearchSerieCard