import React from 'react'
import './PersonCard.css'

const PersonCard = ({person}) => {
  return (
    <div className='personcard'>
         <img src={person.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg` } alt={''} />
         <h3> {person.name} </h3>
         <h4> {person.character} </h4>

    </div>
  )
}

export default PersonCard