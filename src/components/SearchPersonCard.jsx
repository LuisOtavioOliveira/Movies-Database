import React from 'react'
import { Link } from 'react-router-dom'
import './SearchPersonCard.css'

const SearchPersonCard = ({person}) => {

    const knownfor = `${person.known_for.map((thing) => `${thing.title == undefined ?  thing.name  :  thing.title  }`)}`



  return (
    <div className='searchperson'>
        <img src={person.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg` } alt={''} />
        <div className='otherpersoninfos'>
            <Link> {person.name} </Link>
            <p> {person.known_for_department} </p>
            <p> {person.known_for.map((thing) => thing.title == undefined ? <Link>  {thing.name}  </Link> : <Link> {thing.title} </Link>)} </p>
        </div> 
    </div>
  )
}

export default SearchPersonCard