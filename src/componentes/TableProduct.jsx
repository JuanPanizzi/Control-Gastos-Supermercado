import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export const TableProduct = () => {
    
  return (
    <TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>Productos</Th>
        <Th>Cantidad</Th>
        <Th >Precio</Th>
        <Th >Total</Th>
        <Th >Eliminar</Th>

      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Carne</Td>
        <Td>1</Td>
        <Td >25.4</Td>
        <Td >50</Td>
        <Td >Borrar producto</Td>


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
  )
}
