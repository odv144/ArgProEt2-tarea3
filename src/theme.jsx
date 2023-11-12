import { extendTheme } from '@chakra-ui/react'
const colors={
    degrado:{
        primary:'#14c4ff',
        secondary:'#9b9b9b'
    }
}
const Button ={
    baseStyle:{
        fontWight:'Light',
        borderRadius:'20px',
    }
}

export const theme = extendTheme({colors, components:{Button}})