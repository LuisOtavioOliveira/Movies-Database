import React from 'react'
import { Link } from 'react-router-dom'
import './ModalMobile.css'
import {BiHome} from 'react-icons/bi'

const ModalMobile = () => {
  return (
    <div className='modalmobile'>
        <p>
        <Link to='/'> <BiHome></BiHome> </Link>
        </p>
        <h2> Filmes: </h2>
        <Link to='/popular'> Populares </Link>
        <Link> Em Cartaz </Link>
        <Link> Próximas Estreias </Link>
        <Link> Bem Avaliados </Link>
        <h2> Séries: </h2>
        <Link> Populares </Link>
        <Link> Em exibição hoje </Link>
        <Link> Na TV </Link>
        <Link> Bem Avaliadas </Link>
        <h2>Pessoas:</h2>
        <Link> Populares </Link>


    </div>
  )
}

export default ModalMobile