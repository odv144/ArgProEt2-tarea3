import { Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UsuarioContext } from "./context/UsuarioContext";

export const HomeScreen = () => {
  const {usuario,pais} = useContext(UsuarioContext)


  return (
    <Box>
      <div>HomeScreen clientes {pais}</div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Tabla para datos de usuario de {pais}</TableCaption>
          <Thead>
            <Tr>
              <Th>nombre</Th>
              <Th>tecnologia</Th>
              <Th>redes</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{usuario.nombre}</Td>
              <Td>{usuario.tecnologia}</Td>
              <Td >{usuario.redes}</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
