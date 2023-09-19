import React from 'react'
import { Header } from '../componentes/Header'
import { Products } from '../componentes/Products'
import { useCart} from '../hooks/useCart'
import { AddProduct } from '../componentes/AddProduct'
import { Button, ButtonGroup } from '@chakra-ui/react'
export const Main = () => {

  const { products, newProduct, addProduct, removeProduct, handleChange, handleCantidad, handlePrice} = useCart()


  return (
    <>
    <Header/>

    {/* Ingresar Ptoducto */}
    <div>
    <AddProduct addProduct={addProduct} 
            handleChange={handleChange}
            newProduct={newProduct} 
             />
    </div>

    <div className='ctn-products'>
                {products.map(({ nombre, cantidad, precio, totalPorProducto }, index) => (

                    <Products key={`${nombre}-${index}`}
                        nombre={nombre}
                        cantidad={cantidad}
                        precio={precio}
                        totalPorProducto={totalPorProducto}
                        index={index}
                        removeProduct={removeProduct}
                        handleCantidad={handleCantidad}
                        handlePrice={handlePrice} />
                )
                )
                }
                {/* <!-- Numeric Textfield with Floating Label --> */}

                

            </div>
    </>
  )
}
