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
    <Card maxW="sm" m='15px'bg='lineal-gradient(black,white)'> 
      <CardBody >
        <Image
          src={img}
          alt="Imagen del producto no disponible"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{nombre}</Heading>
          <Text>{descripcion}</Text>
          <Text color="blue.600" fontSize="2xl">
            {precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
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
