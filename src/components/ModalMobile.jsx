import React from 'react'
import { Link } from 'react-router-dom'
import './ModalMobile.css'
import {BiHome} from 'react-icons/bi'

const ModalMobile = ({display }) => {

  return (
    <div className={`modalmobile ${!display ? 'modalinvisible' : ''}`}>
        <p>
        <Link to='/'> <BiHome></BiHome> </Link>
        </p>
        <h2> Filmes: </h2>
        <Link to='/popularmovies'> Populares </Link>
        <Link to='/onairmovies'> Em Cartaz </Link>
        <Link to='/nextmovies'> Próximas Estreias </Link>
        <Link to='/topratedmovies'> Bem Avaliados </Link>
        <h2> Séries: </h2>
        <Link to='/popularseries'> Populares </Link>
        <Link to='/ontvseries'> Na TV </Link>
        <Link to='/topratedseries'> Bem Avaliadas </Link>
        <h2>Pessoas:</h2>
        <Link> Populares </Link>
        <h2> <Link to='/favorites'> Favoritos </Link> </h2>


    </div>
  )
}

export default ModalMobile