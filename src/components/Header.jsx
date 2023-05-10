import React from 'react'
import { useNavigate } from 'react-router-dom'
import title from '../assets/images/logomain.png'
import hoja from '../assets/images/leaf-fluttering-in-wind-nature.gif'
import '../styles/header.css'

const Header = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleHome = () => {
        navigate('/')
    }

    return (
        <div className='header'>
            <img src={hoja} alt="hoja" className='hoja' />
            <img src={title} alt="title" className='title' onClick={handleHome}/>
            <button
                type="button"
                class="btn btn-outline-success btnLog"
                onClick={handleLogin}
            >
                <i class="fi fi-rr-settings"></i>
            </button>

        </div>
    )
}

export default Header