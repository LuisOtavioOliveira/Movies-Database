import React from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {

    const id = useParams()
    console.log(id)
    
    const divStyle = {
        color: 'white',
        background: '86vh'
      };


  return (

    <div className='Moviecontainer' >
        <div style={divStyle}>
        <div></div>
        <div></div>
        </div>
    </div>
  )
}

export default Movie