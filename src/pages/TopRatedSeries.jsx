import React from 'react'
import './PopularMovies.css'
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import {AiOutlineArrowRight, AiOutlineArrowDown} from 'react-icons/ai'
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import BigMovieCard from '../components/BigMoviecard';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import SearchMovieCard from '../components/SearchMovieCard';
import BigSerieCard from '../components/BigSerieCard';

const TopRatedSeries = () => {

    const [page, setPage] = useState(1)
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [orderBy, setOrderBy] = useState('')
    const [onTvSeries, setOnTvSeries] = useState([])
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
  setOnTvSeries([...onTvSeries, data.results].flat());
};

const getOnTvSeries = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  setOnTvSeries([...onTvSeries, data.results].flat());
};

const NextPage = () => {
setPage(page + 1)
    const urlnextpage = `https://api.themoviedb.org/3/tv/top_rated?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=${page}`
  getNextPage(urlnextpage)
  

  
}

useEffect(() => {
  const urlPopularMovies = `https://api.themoviedb.org/3/tv/top_rated?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=${page}`
  getOnTvSeries(urlPopularMovies)
  setPage(page + 1)

},[]);



  return (
    <div className='Movies'>
        <div className='filter'>
            <button className={`buttonfilter ${open1 && 'openfilter'}`} onClick={open1 ? () => setOpen1(false) : () => setOpen1(true)}  > Exibir {open1 ? <AiOutlineArrowDown></AiOutlineArrowDown> : <AiOutlineArrowRight></AiOutlineArrowRight> } </button>
            {open1 && <div className='genresfilter'>
                <p> Mostrar séries: </p>
               <div>
                <button onMouseLeave={()=> NoHover('topratedseries')} id='topratedseries' onClick={() => SetOrder('topratedseries') } className={`buttongenre order`} > Bem avaliadas </button>
                <button onMouseLeave={()=> NoHover('popularseries')} id='popularseries' onClick={() => SetOrder('popularseries') } className={` buttongenre order`} > Populares </button>
                <button onMouseLeave={()=> NoHover('ontvseries')} id='ontvseries' onClick={() => SetOrder('ontvseries') } className={` buttongenre order`} > Na TV </button>
               </div>
            </div>}

            <button className='buttonsearchfilter' onClick={() => Filter(genres)}> <Link to={ orderBy != '' && `/${orderBy}` }> Pesquisar </Link> </button>
            
        </div>
        
      
        
        <div className='moviegrid'>
        <h2 className='titlemovies'> Séries bem avaliadas: </h2>
          <div  className='moviegrid'>
          {onTvSeries.length > 0 ?  onTvSeries.map((movie) =><BigSerieCard movie={movie}> </BigSerieCard>) : <Loading></Loading>} 
          </div>
            
            
          <button onClick={() => NextPage()} className='loadmore'> Carregar mais... </button>
        </div>
        
    </div>
  )
}

export default TopRatedSeries