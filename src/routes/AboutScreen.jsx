import React, { useContext } from 'react'
import { UsuarioContext } from './context/UsuarioContext'

export const AboutScreen = () => {
  const {usuario, pais}=useContext(UsuarioContext)
  return (
    <div><p>
      Bienvenido señor: {usuario.nombre} master en tecnologpia tipo: {usuario.tecnologia}
      </p>
      <p>Oriundo de {pais}</p>
    </div>
  )
}
