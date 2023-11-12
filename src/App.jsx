import { useState } from "react";

import Section from "./Components/Section/Section";
import {Box, ChakraProvider} from '@chakra-ui/react'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {theme} from './theme.jsx'
function App() {
 
  return (
       <ChakraProvider theme={theme}> 
          <Header/>
          <Section/>
          <Footer/>
        </ChakraProvider>
     
     
  );
}

export default App;
