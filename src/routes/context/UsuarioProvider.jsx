import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

const usuario={
    nombre:"omar Dario",
    tecnologia:"react",
    redes:"odv144"
}
export const UsuarioProvider = ({children}) => {
    const [usuario,setUsuario]=useState({})

    return (
    <UsuarioContext.Provider value={{usuario,pais:'Argentina',setUsuario}}>
        {children}
    </UsuarioContext.Provider>
  )
}
