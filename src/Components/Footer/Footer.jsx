import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <Box as='footer' display='block' textAlign='center'>
        <Text color='#fff' size='1.2em' p='10px'>Argentina Programa Trabajo Practico Unidad 3</Text>
    </Box>
  )
}

export default Footer