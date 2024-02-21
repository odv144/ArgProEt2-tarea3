import {
  Button,
  Flex,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {useForm} from './hooks/useForm.js'
import { useContext, useState } from "react";
import { UsuarioContext } from "./context/UsuarioContext.jsx";

export const LoginScreen = () => {
    const inicialForm = {
        nombre:'',
        tecnologia:'',
        redes:''
    }
    const {setUsuario}=useContext(UsuarioContext)
    const {formState,nombre,tecnologia,redes,onInputChange}= useForm(inicialForm)

   const onSubmit=(e)=>{
        e.preventDefault();
        setUsuario(formState)
        console.log(formState);
    }
  return (
    <Flex w='50%' justifyContent='center'>
    
      <form onSubmit={onSubmit}>
        <FormLabel>Usuario</FormLabel>
        <Input type="text"name='nombre' value={nombre} onChange={onInputChange} />
        <FormLabel>Tecnologia</FormLabel>
        <Input type="text" name='tecnologia'value={tecnologia} onChange={onInputChange}  />
        <FormLabel>Redes</FormLabel>
        <Input type="text" name='redes'value={redes} onChange={onInputChange} />
        
       
        <Button
          mt={4}
          colorScheme="teal"
            type='submit'
        >
         Registrar Usuario
        </Button>
      </form>
    </Flex>
  );
};
