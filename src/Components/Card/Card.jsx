import React from 'react'
import './Card.css'

const Card = ({nombre,img,precio,descripcion,habilitado,stock}) => {
  
    return (
        <div className='container-card'>
             <img src={img} alt=''/>
             <h3>{nombre}</h3>
             <div className='producto-details'>
                <h5>{descripcion}</h5>
                <p><span>Precio: {precio}</span></p>
                {((stock>0) && habilitado) ? <p>Stock de: {stock}</p>: <p>Sin Stoc</p>}
             </div>

        </div>
  )
}

export default  Card