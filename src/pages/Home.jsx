import React from 'react'
import { useNavigate } from 'react-router-dom'
import hojaHome from '../assets/images/leaf-fluttering-in-wind-nature.gif'
import hojaBtn from '../assets/images/leaf-fluttering-in-wind-nature.gif'
import '../styles/home.css'

const Home = () => {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/region')
    }

    return (
        <div className='home'>
            <img src={hojaHome} alt="hojaHome" className='hojaHome' />
            <button
                type="button"
                class="btn btn-success btnInicio"
                onClick={handleRedirect}
            >
                <img src={hojaBtn} alt="hojaBtn" className='hojaBtn' />
                INICIO
                <img src={hojaBtn} alt="hojaBtn" className='hojaBtn' />
            </button>
        </div>
    )
}

export default Home
