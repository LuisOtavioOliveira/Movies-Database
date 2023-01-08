import React from 'react'
import './PopularMovies.css'
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import {AiOutlineArrowRight, AiOutlineArrowDown} from 'react-icons/ai'
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import BigMovieCard from '../components/BigMoviecard';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const PopularMovies = () => {

    const [page, setPage] = useState(1)
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [orderBy, setOrderBy] = useState('')
    const [popularMovies, setPopularMovies] = useState([])
    const [carriedMore, setCarriedMore] =  useState(false)

    

    let genres = []

    const Filter = (generos) => {
    }

    const Set = (genero) => {
       if (genres.indexOf(genero) == -1) {
        genres.push(genero)
document.getElementById(genero).classList.add('selectedgenre')
       } else {
        genres = genres.filter((genre) => genre != genero)
        document.getElementById(genero).classList.remove('selectedgenre')
        document.getElementById(genero).classList.add('no_hover')

       }
    }

    const NoHover = (genero) => {
      document.getElementById(genero).classList.remove('no_hover')
    }

const SetOrder = (order) => {

  if (orderBy !== '' ) {
    document.getElementById(orderBy).classList.remove('selectedgenre')
  }

  if (orderBy === order) {
    setOrderBy('')
    document.getElementById(order).classList.remove('selectedgenre')
    document.getElementById(order).classList.add('no_hover')
    
    
  } else {
    setOrderBy(order)
    document.getElementById(order).classList.add('selectedgenre')
  }

  
}

const getNextPage = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  setPopularMovies([...popularMovies, data.results].flat());
  console.log(popularMovies)
};

const getPopularMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  setPopularMovies([...popularMovies, data.results].flat());
};

const NextPage = () => {
setPage(page + 1)
    const urlnextpage = `https://api.themoviedb.org/3/movie/popular?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=${page}`
  getNextPage(urlnextpage)
  

  
}

useEffect(() => {
  const urlPopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=${page}`
  getPopularMovies(urlPopularMovies)
  setPage(page + 1)

},[]);



  return (
    <div className='PopularMovies'>
        <div className='filter'>
            <button className={`buttonfilter ${open1 && 'openfilter'}`} onClick={open1 ? () => setOpen1(false) : () => setOpen1(true)}  > Ordenar {open1 ? <AiOutlineArrowDown></AiOutlineArrowDown> : <AiOutlineArrowRight></AiOutlineArrowRight> } </button>
            {open1 && <div className='genresfilter'>
                <p> Ordenar por: </p>
               <div>
                <button onMouseLeave={()=> NoHover('toprated')} id='toprated' onClick={() => SetOrder('toprated') } className={`buttongenre order`} > Classificação dos usuários </button>
                <button onMouseLeave={()=> NoHover('popular')} id='popular' onClick={() => SetOrder('popular') } className={` buttongenre order`} > Popularidade </button>
               </div>
            </div>}

            <button className='buttonsearchfilter' onClick={() => Filter(genres)}> <Link to={ orderBy != '' && `/${orderBy}` }> Pesquisar </Link> </button>
            
        </div>
        
      

        <div className='moviegrid'>
          <div  className='moviegrid'>
          {popularMovies.length > 0 ? popularMovies.map((movie) =><BigMovieCard movie={movie}> </BigMovieCard>) : <Loading></Loading>} 
          </div>
            
            
          <button onClick={() => NextPage()} className='loadmore'> Carregar mais... </button>
        </div>
        
    </div>
  )
}

export default PopularMovies