import React from 'react'

import { Card, CardHeader, CardBody, CardFooter, SimpleGrid,Heading,Text, Button, Img } from "@chakra-ui/react";

const Producto = ({nombre, descripcion,precio,habilitado,sku,stock,img}) => {
  
    return (
    
      <SimpleGrid
      
    >
      <Card>
        <CardHeader>
          <Heading size="md">{nombre}</Heading>
        </CardHeader>
        <CardBody>

          <Text>{descripcion}</Text>
          <Text>Precio: {precio} Stock: {stock}</Text>
          <Text>{habilitado}</Text>
          <Img src={img}/>
          
        </CardBody>
        <CardFooter>
          
          <Button>Comprar</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
       
  )
}

export default Producto