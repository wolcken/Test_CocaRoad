import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'

const Login = () => {

  const navigate = useNavigate();

  const handleModif = () => {
    navigate('/modif')
  }

  return (
    <div className="Login">
      <div className="Login-container">

        <form className="form" >
          {/* entrada de user */}
          <label htmlFor="email" className="label">Usuario</label>
          <div className='container_input'>
            <i className="fi fi-rr-user"></i>
            <input
              type="text"
              name='email'
              placeholder="correo@example.cm"
              className="input input-email"
            />
          </div>
          {/* entrada de contraseña */}
          <label htmlFor="password" className="label">Contraseña</label>
          <div className='container_input' >
            <i class="fi fi-rr-lock icon"></i>
            <input
              type="password"
              name='password'
              placeholder="*********"
              className="input input-password"
            />
          </div>

          <button
            className="btn btn-primary login-button"
            type='submit'
            onClick={handleModif}
          >
            Iniciar Sesion
          </button>
          {/* <a href="/">Olvidaste tu contraseña?</a> */}
        </form>

        {/* <button
            className="secondary-button signup-button"
        >
            Registrarse
        </button> */}
      </div>
    </div>
  )
}

export default Login
