import React from 'react'
import './PopularMovies.css'
import {AiOutlineArrowRight, AiOutlineArrowDown} from 'react-icons/ai'
import { useState, useEffect } from 'react';
import BigMovieCard from '../components/BigMoviecard';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';


const TopRatedMovies = () => {

    const [page, setPage] = useState(1)
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [orderBy, setOrderBy] = useState('')
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [carriedMore, setCarriedMore] =  useState(false)
    const [favorites, setFavorites] = useState([])

    
    function getFavorites() {
      const items = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        items[key] = JSON.parse(localStorage.getItem(key));
      }
      return items;
    }
    


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
  setTopRatedMovies([...topRatedMovies, data.results].flat());

};

const GetTopRatedMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  setTopRatedMovies([...topRatedMovies, data.results].flat());
};

const NextPage = () => {

    if (page < 86) {
        setPage(page + 1)
    }

    const urlnextpage = `https://api.themoviedb.org/3/movie/top_rated?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=${page}`
  getNextPage(urlnextpage)
  

  
}

useEffect(() => {
  const urlPopularMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=4888028033e53f9aa150a7b1fd5bf7ca&language=pt-BR&page=${page}`
  GetTopRatedMovies(urlPopularMovies)
  if (page < 86) {
    setPage(page + 1)
  }
  const favoriteMovies = getFavorites()
  setFavorites(Object.values(favoriteMovies))


},[]);



  return (
    <div className='Movies'>
         <div className='filter'>
            <button className={`buttonfilter ${open1 && 'openfilter'}`} onClick={open1 ? () => setOpen1(false) : () => setOpen1(true)}  > Exibir {open1 ? <AiOutlineArrowDown></AiOutlineArrowDown> : <AiOutlineArrowRight></AiOutlineArrowRight> } </button>
            {open1 && <div className='genresfilter'>
                <p> Mostrar Filmes:: </p>
               <div>
                <button onMouseLeave={()=> NoHover('topratedmovies')} id='topratedmovies' onClick={() => SetOrder('topratedmovies') } className={`buttongenre order`} > Bem avaliados </button>
                <button onMouseLeave={()=> NoHover('popularmovies')} id='popularmovies' onClick={() => SetOrder('popularmovies') } className={` buttongenre order`} > Populares </button>
                <button onMouseLeave={()=> NoHover('onairmovies')} id='onairmovies' onClick={() => SetOrder('onairmovies') } className={` buttongenre order`} > Em Cartaz </button>
                <button onMouseLeave={()=> NoHover('nextmovies')} id='nextmovies' onClick={() => SetOrder('nextmovies') } className={` buttongenre order`} > Estreia em breve</button>
               </div>
            </div>}

            <button className='buttonsearchfilter' onClick={() => Filter(genres)}> <Link to={ orderBy != '' && `/${orderBy}` }> Pesquisar </Link> </button>
            
        </div>
        
      
        
        <div className='moviegrid'>
        <h2 className='titlemovies'> Bem avaliados: </h2>
          <div  className='moviegrid'>
          {topRatedMovies.length > 0 ?  topRatedMovies.map((movie) =>favorites.find((fav) => fav.id === movie.id) ? <BigMovieCard favorite={true} movie={movie} ></BigMovieCard> :  <BigMovieCard movie={movie}> </BigMovieCard>) : <Loading></Loading>} 
          </div>
            
            
          <button onClick={() => NextPage()} className='loadmore'> Carregar mais... </button>
        </div>
        
    </div>
  )
}

export default TopRatedMovies