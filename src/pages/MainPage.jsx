import React, { useMemo, useState } from 'react'
import { Header } from '../componentes/Header'
import { Products } from '../componentes/Products'
import { useCart} from '../hooks/useCart'
import { AddProduct } from '../componentes/AddProduct'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { TableProduct } from '../componentes/TableProduct'
import '../styles/MainPage.css'



export const MainPage = () => {
  
  const { products, newProduct, addProduct, removeProduct, handleChange, handleCantidad, handlePrice, handleTotal} = useCart()
  const total = useMemo(()=> handleTotal(), [products])


  return (
    <>
    <Header/>

    <AddProduct addProduct={addProduct} 
            handleChange={handleChange}
            newProduct={newProduct}
/>

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

            </div>
                <div className='total'>
                <h3>TOTAL: $ {total}</h3>
                  </div>                
              
    </>
  )
}
