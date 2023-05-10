import React from 'react'
import { useNavigate } from 'react-router-dom'
import hojaBtn from '../assets/images/leaf-fluttering-in-wind-nature.gif'
import '../styles/region.css'

const Region = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/sector')
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className='region'>
      <h2 className='subTitle'>Regiones</h2>
      <div className='back'>
        <button
          type="button"
          className="btn btn-secondary btnBack"
          onClick={handleBack}
        >
          <i class="fi fi-rr-left"></i>
        </button>
      </div>
      <button
        type="button"
        className="btn btn-success btnCoca btnNor"
        onClick={handleRedirect}
      >
        <img src={hojaBtn} alt="hojaBtn" className='hojaBtn' />
        Nor Yungas
        <img src={hojaBtn} alt="hojaBtn" className='hojaBtn' />
      </button>
      <button
        type="button"
        className="btn btn-success btnCoca btnSud"
        onClick={handleRedirect}
      >
        <img src={hojaBtn} alt="hojaBtn" className='hojaBtn' />
        Sud Yungas
        <img src={hojaBtn} alt="hojaBtn" className='hojaBtn' />
      </button>

    </div >
  )
}

export default Region
