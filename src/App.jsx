import { useState } from "react";

import Section from "./Components/Section/Section";
import {Box, ChakraProvider} from '@chakra-ui/react'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {theme} from './theme.jsx'
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./routes/HomeScreen.jsx";
import { AboutScreen} from "./routes/AboutScreen.jsx"
import { ContactScreen } from "./routes/ContactScreen.jsx";
import { LoginScreen } from "./routes/LoginScreen.jsx";
import { UsuarioProvider } from "./routes/context/UsuarioProvider.jsx";
function App() {
 
  return (
    <UsuarioProvider>

       <ChakraProvider theme={theme}> 
          <Header/>
        
          {/* <Section/> */}
          {/* <Footer/> */}
          <Routes>
            <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
            <Route path='/about' element={<AboutScreen></AboutScreen>}></Route>
            <Route path='/contact' element={<ContactScreen></ContactScreen>}></Route>
            <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
            <Route path = '/*' element={<Navigate to='/'/>}></Route>
          </Routes>
        </ChakraProvider>
    </UsuarioProvider>
     
     
  );
}

export default App;
