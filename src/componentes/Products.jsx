import React from 'react'
import '../styles/Products.css'
import { Button, Center, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react'


export const Products = ({ nombre, cantidad, precio, totalPorProducto, index, removeProduct, handleCantidad, handlePrice }) => {


  return (
    <>
      <div className='product'>
        <div>
          <Button colorScheme='gray' variant='outline' w={["10%", "30%", "50%"]}>
            <i className='material-icons icono-carrito'>shopping_cart</i>
         </Button>
        </div>
        <div>
          <span className='nombre-producto'>{nombre.toUpperCase()}</span>
        </div>


      <div>

        <form action="#" className='input-cantidad' >
          
        <Stack >
            <InputGroup size={["xs","sm", "md"]}>
              
              <Input  
               placeholder='Cantidad' type='number'  value={cantidad} onChange={(e) => handleCantidad(e, index)} 
              onSubmit={(e)=>e.preventDefault} fontSize={["0.6rem", "0.8rem"]}
              textAlign="center" px="1px"/>
            </InputGroup>
          </Stack>  
        
          {/* 
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="number" id="sample3" onChange={(e) => handleCantidad(e, index)}
              defaultValue={cantidad} />
            <label className="mdl-textfield__label" htmlFor="sample3">Cantidad</label>
          </div> */}
        
        
        </form>
      </div>
      
<div>

        <form action="#" className='input-precio'>

          <Stack>
            <InputGroup  size={["xs","sm", "md"]} >
              <InputLeftElement 
                // display="flex"
                // justifyContent="start"
                // ml={3}
                // mr={0}
                // pr={0}
                pointerEvents='none'
                color='teal'
                fontSize={["0.6rem", "0.8rem"]}
                children='$'
               
              />
              <Input placeholder='0.00'  value={precio} onChange={(e) => handlePrice(e, index)}
                fontSize={["0.6rem", "0.8rem"]}
                type='number'  onSubmit={(e)=>e.preventDefault} px="1px"  textAlign="center"
                />

            </InputGroup>
          </Stack>
          {/* <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="number" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4" value={precio} onChange={(e) => handlePrice(e, index)} />
            <label className="mdl-textfield__label" htmlFor="sample4">Precio $</label>
            <span className="mdl-textfield__error">¡Elige un número!</span>
          </div> */}

        </form>
</div>

        <div>
          <span className='nombre-producto'>TOTAL: $ {totalPorProducto}</span>
        </div>
        {/* <!-- Colored FAB button with ripple --> */}
        <div>
        <Button colorScheme='red' variant='outline' onClick={() => removeProduct(nombre)}  w={["10%", "30%", "50%"]}>
        <i className="material-icons icono-carrito">remove_shopping_cart</i>
  </Button>
        </div>
      </div>
    </>

  )



}
