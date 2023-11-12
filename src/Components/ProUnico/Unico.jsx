import React from "react";


import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

const Unico = ({
  nombre,
  descripcion,
  precio,
  habilitado,
  sku,
  stock,
  img,
}) => {
  return (
    <Card maxW="sm" m='15px'  bg='none'  border='none' boxShadow='none'> 
      <CardBody border='none' >
        <Image
          src={img}
          alt="Imagen del producto no disponible"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" textAlign='center' textShadow='2px 2px 10px #000' color='white' >{nombre}</Heading>
          <Text color='white' fontWeight='bold'>{descripcion}</Text>
          <Text color="blue.600" textAlign='center' textShadow='1px 1px 2px #1cfffb' fontSize="2xl" >
            {precio}
          </Text>
        </Stack>
      </CardBody>
    
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Comprar
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Agregar
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Unico;
