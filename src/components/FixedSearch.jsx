import React from 'react'
import { BsSearch } from "react-icons/bs";
import './FixedSearch.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FixedSearch = () => {

  const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const SendForm = (e) => {
        e.preventDefault()
        if (query !== '') {
          navigate(`/search/${query}`)
        } else return
       
    } 

    const handleChange = event => {
        setQuery(event.target.value);
      };

  return (
    <div className='fixedsearch'>
        <div>
        <h1> Bem-Vindo.</h1>
        <h3>Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</h3>
        </div>
        <form onSubmit={SendForm}>
            <input onChange={handleChange} placeholder='Buscar por um filme, série ou pessoa...' type="text" />
            <button aria-label="Pesquisar" type='submit'> Search </button>
        </form>

    </div>
  )
}

export default FixedSearch