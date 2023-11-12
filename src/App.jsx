import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Section from "./Components/Section/Section";
import {ChakraProvider} from '@chakra-ui/react'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {theme} from './theme.jsx'
function App() {
 
  return (
    <>
      <div>
        <ChakraProvider theme={theme}>
          <Header/>
          <Section/>
          <Footer/>
        </ChakraProvider>
        {/* <Card Producto={Producto}/> para uno solo*/}
        {/* { Productos.map(Producto=> 
                  <Card 
                  key={Producto.sku} 
                  nombre={Producto.nombre} 
                  img={Producto.img} 
                  descripcion={Producto.descripcion} 
                  precio={Producto.precio}
                  habilitado={Producto.habilitado}
                  stock={Producto.stock}
                  />)} */}
      </div>
    </>
  );
}

export default App;
