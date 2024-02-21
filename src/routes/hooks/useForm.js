import { useState } from "react";

export const useForm = (inicialForm={}) => {
    
    const [formState, setFormState]= useState(inicialForm)
    
    const onInputChange=(e)=>{
        const {name,value}=e.target;
        setFormState({
            ...formState,[name]:value
        })
    }


  return {
    ...formState,
    formState,
     onInputChange
  }
}
