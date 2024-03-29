import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import Modal from './Modal';
import NavSearch from './NavSearch';
import {GiHamburgerMenu} from 'react-icons/gi'
import ModalMobile from './ModalMobile';
import { useEffect } from 'react';
import {BiHome} from 'react-icons/bi'

const Navbar = () => {

  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  useEffect(() => {
    setOpen2(false)
  },[]);
 


  return (
    <div>
      <div className='navbar-container'>
        <ul className='navbarul1'>
            <li className='here'><Link to='/' className='white'> <BiHome></BiHome> </Link></li>
            <li onClick={() => setVisible(true)} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}> 
              <p className='fontweightnav'> Filmes </p>
              {visible && <Modal tipo="movies"/>}
            </li>
           
            <li onClick={() => setVisible2(true)} onMouseOver={() => setVisible2(true)} onMouseLeave={() => setVisible2(false)}> 
              <p className='fontweightnav'> Séries </p>
              {visible2 && <Modal tipo="series"/>}
            </li>
            <li onClick={() => setVisible3(true)} onMouseOver={() => setVisible3(true)} onMouseLeave={() => setVisible3(false)}> 
              <p className='fontweightnav'> Pessoas </p>
              {visible3 && <Modal tipo="persons"/>}
            </li>
        </ul>
        <ul className='navbarul2'>
            <li className='fontweightnav'> <Link to='/favorites' className='white'>Favoritos </Link> </li>
            <li> 
                {open ? <button aria-label="menu de pesquisa" onClick={() => setOpen(false)} className='buttonsearch'> <AiOutlineClose></AiOutlineClose>  </button> : <button aria-label="menu de pesquisa" onClick={() => setOpen(true)} className='buttonsearch'> <BsSearch className='searchbutton'></BsSearch> </button>}
                
            </li>
        </ul>
        
    </div>
    
    <div className='navbar-container mobilenav'>
        <ul>
          <li>

           {open2 ? <button aria-label="Abrir menu" onClick={() => setOpen2(false)} className='buttonsearch'> <GiHamburgerMenu></GiHamburgerMenu> </button> : <button aria-label="Fechar menu" onClick={() => setOpen2(true)} className='buttonsearch'> <GiHamburgerMenu></GiHamburgerMenu> </button>} 
          </li>
         
        </ul>
        <ul>
        <li>
          {open ? <button aria-label="Abrir menu de pesquisa" onClick={() => setOpen(false)} className='buttonsearch'> <AiOutlineClose></AiOutlineClose>  </button> : <button aria-label="Fechar menu de pesquisa" onClick={() => setOpen(true)} className='buttonsearch'> <BsSearch className='searchbutton'></BsSearch> </button>}
          </li>
        </ul>
    </div>
   <div onClick={() => setOpen2(!open2)}>
   {open2 == true ?  <ModalMobile display={true} ></ModalMobile> : <ModalMobile display={false}></ModalMobile> }
   </div>
    {open && <NavSearch></NavSearch>}
    </div>
  )
}

export default Navbar