import { extendTheme } from '@chakra-ui/react'
const colors={

}
const Button ={
    baseStyle:{
        fontWight:'Light',
        borderRadius:'20px',
    }
}

export const theme = extendTheme({colors, components:{Button}})