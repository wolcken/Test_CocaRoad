import React from 'react'
import '../styles/modificaciones.css'

const Modificaciones = () => {

    const conf = () => {
        alert("Esta Seguro?")
    }

    return (
        <div className='modificaciones'>
            <h2>Actualizacion de Precios</h2>
            <section className='modif'>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Seleccione la Region</option>
                    <option value="1">Nor Yungas</option>
                    <option value="2">Sud Yungas</option>
                </select>

                <select className="form-select" aria-label="Default select example">
                    <option selected>Seleccione el Sector</option>
                    <option value="1">Coripata</option>
                    <option value="2">Arapata</option>
                    <option value="3">Otro</option>
                    <option value="4">Otro</option>
                    <option value="5">Otro</option>
                    <option value="6">Otro</option>
                </select>

                <div className="input-group mb-3">
                    <span class="input-group-text">Bs</span>
                    <span class="input-group-text">0.00</span>
                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                </div>

                <button type="button" className="btn btn-primary" onClick={conf}>Confirmar</button>
            </section>
        </div>
    )
}

export default Modificaciones
