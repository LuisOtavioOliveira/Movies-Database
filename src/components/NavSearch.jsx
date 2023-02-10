import React from 'react'
import { BsSearch } from "react-icons/bs";
import './NavSearch.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavSearch = () => {

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
    <div className='navsearch'>
 <h1> <BsSearch></BsSearch> </h1>
        <form onSubmit={SendForm}>
           
            <input onChange={handleChange} placeholder='Buscar por um Filme, Série ou Pessoa' type="text" />
            
        </form>
    </div>
  )
}

export default NavSearch