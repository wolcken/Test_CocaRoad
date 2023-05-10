import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/sector.css'

const Sector = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/region')
  }

  return (
    <div className='sector'>
      <h2 className='subTitle'>Sector</h2>
      <div className='back'>
        <button
          type="button"
          className="btn btn-secondary btnBack"
          onClick={handleBack}
        >
          <i class="fi fi-rr-left"></i>
        </button>
      </div>
      <section className='informacion'>
        <div className='inf_sec'>
          <h5>CORIPATA</h5>
          <span>1500 Bs</span>
        </div>
        <div className='inf_sec'>
          <h5>ARAPATA</h5>
          <span>2000 Bs</span>
        </div>
        <div className='inf_sec'>
          <h5>OTRO</h5>
          <span>1800 Bs</span>
        </div>
        <div className='inf_sec'>
          <h5>OTRO</h5>
          <span>1800 Bs</span>
        </div>
        <div className='inf_sec'>
          <h5>OTRO</h5>
          <span>1800 Bs</span>
        </div>
        <div className='inf_sec'>
          <h5>OTRO</h5>
          <span>1800 Bs</span>
        </div>
        <div className='inf_sec'>
          <h5>OTRO</h5>
          <span>1800 Bs</span>
        </div>
        <div className='inf_sec'>
          <h5>OTRO</h5>
          <span>1800 Bs</span>
        </div>
        <div className='inf_sec'>
          <h5>OTRO</h5>
          <span>1800 Bs</span>
        </div>
      </section>
    </div>
  )
}

export default Sector