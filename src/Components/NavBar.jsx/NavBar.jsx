import { Box } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <Box
      as="nav"
      bg="gray"
      display="flex"
      justifyContent="space-around"
      m="15px 0"
    >
      <NavLink 
        to='/'
        bgGradient='linear(to-r, green.200, pink.500)'
        p="10px"
        color="#fff"
        m="5px"
        borderRadius="10px"
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
         bgGradient="linear(to-b,#2B6CB0, #000)"
        p="10px"
        color="#fff"
        m="5px"
        borderRadius="10px"
      >
        About
      </NavLink>
      <NavLink 
        to='/login'
        bgGradient="linear(to-b,#2B6CB0, #000)"
        p="10px"
        color="#fff"
        m="5px"
        borderRadius="10px"
      >
        Login
      </NavLink>
      <NavLink
      to='/contact'
       bgGradient="linear(to-b,#2B6CB0, #000)"
        p="10px"
        color="#fff"
        m="5px"
        borderRadius="10px"
      >
        Contact
      </NavLink>
    </Box>
  );
};

export default NavBar;
