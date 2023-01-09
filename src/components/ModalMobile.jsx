import React from 'react'
import { Link } from 'react-router-dom'
import './ModalMobile.css'
import {BiHome} from 'react-icons/bi'

const ModalMobile = () => {
  return (
    <div className='modalmobile'>
        <p className='house'><a  href='/'> <BiHome/> </a></p>
        <h2> Filmes: </h2>
        <a href='/popular'> Populares </a>
        <a href=''> Em Cartaz </a>
        <a href=''> Próximas estreias </a>
        <a href=''> Bem Avaliados </a>
        <h2> Séries: </h2>
        <a href=''> Populares </a>
        <a href=''> Em exibição hoje </a>
        <a href=''> Na TV </a>
        <a href=''> Bem avaliadas </a>
        <h2>Pessoas:</h2>
        <a href=''> Populares </a>


    </div>
  )
}

export default ModalMobile