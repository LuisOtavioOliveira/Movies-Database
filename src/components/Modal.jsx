import React from 'react'
import './Modal.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Modal = ({tipo}) => {


  return (
    <div className='teste'>
        {tipo == 'movies' && <ul>
            <li className='limodal'><Link to='/popularmovies' className='linkmodal'>Populares</Link></li>
            <li className='limodal'><Link to='/onairmovies' className='linkmodal'>Em Cartaz</Link></li>
            <li className='limodal'><Link to='/nextmovies' className='linkmodal'>Próximas Estreias</Link></li>
            <li className='limodal'><Link to='/topratedmovies' className='linkmodal'>Bem avaliados</Link></li>
        </ul>}
        {tipo == 'series' && <ul>
            <li className='limodal'><Link to='/popularseries'  className='linkmodal'>Populares</Link></li>
            <li className='limodal'><Link to='/ontvseries' className='linkmodal'>Na TV</Link></li>
            <li className='limodal'><Link to='/topratedseries' className='linkmodal'>Bem avaliadas</Link></li>
        </ul>}
        {tipo == 'persons' && <ul>
            <li className='limodal'><Link className='linkmodal'>Pessoas populares</Link></li>

        </ul>}
        
    </div>
  )
}

export default Modal