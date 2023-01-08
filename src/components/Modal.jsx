import React from 'react'
import './Modal.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Modal = ({tipo}) => {


  return (
    <div className='teste'>
        {tipo == 'movies' && <ul>
            <li className='limodal'><Link to='/popular' className='linkmodal'>Populares</Link></li>
            <li className='limodal'><Link className='linkmodal'>Em Cartaz</Link></li>
            <li className='limodal'><Link className='linkmodal'>Próximas Estreias</Link></li>
            <li className='limodal'><Link className='linkmodal'>Bem avaliados</Link></li>
        </ul>}
        {tipo == 'series' && <ul>
            <li className='limodal'><Link className='linkmodal'>Populares</Link></li>
            <li className='limodal'><Link className='linkmodal'>Em exibição hoje</Link></li>
            <li className='limodal'><Link className='linkmodal'>Na TV</Link></li>
            <li className='limodal'><Link className='linkmodal'>Bem avaliadas</Link></li>
        </ul>}
        {tipo == 'persons' && <ul>
            <li className='limodal'><Link className='linkmodal'>Pessoas populares</Link></li>

        </ul>}
        
    </div>
  )
}

export default Modal