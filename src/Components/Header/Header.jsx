import './Header.css'
import logo from './logo.jpg'
import { Box, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Header = props => {
  return (
    <Box as='header' w='90vw' >
        <Box display='flex' flexDirection='row' justifyContent='space-evenly' m='10px' verticalAlign='center' >
          <Image src={logo} alt='Sin Imagen' w='150px'
            fallbackSrc='https://via.placeholder.com/150'
            border='10px solid #000'
            borderRadius='20px'/>
          <Text fontSize='4em'
                color='#1915F7' 
                bgGradient='linear(to-l, #7270f4, #080696)'
                bgClip='text'
                fontWeight='bold' 
                textShadow='-5px -5px #333' 
                m='6'
                fontStyle='italic'
                >COMPUSHOP</Text>
        </Box>
        <Box as='nav' bg='gray' display='flex' justifyContent='space-around' m='15px 0' >
            <Link href='/' bg='#1f1f1f' p='10px' color='#fff' >Home</Link>
            <Link href='/' bg='#1f1f1f' p='10px' color='#fff'>Productos</Link>
            <Link href='/' bg='#1f1f1f' p='10px' color='#fff'>About</Link>
        
        </Box>
    </Box>
  )
}



export default Header