import React from 'react'
import '../styles/Products.css'
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
export const Products = ({nombre, cantidad, precio, totalPorProducto, index, removeProduct, handleCantidad, handlePrice}) => {
  
  // si agrego carne, carne == index 0 en  products[]

  return (
    <>
    <div className='product'>
      <div>
            <span>
       <i className='material-icons'>shopping_cart</i>
        </span>
      </div>
      <div>
        <span>{nombre.toUpperCase()}</span>
      </div>

<form action="#" className='input-cantidad' >
  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input className="mdl-textfield__input" type="number" id="sample3"  onChange={(e)=>handleCantidad(e, index)}
     defaultValue={cantidad}/>
    <label className="mdl-textfield__label" htmlFor="sample3">Cantidad</label>
  </div>
</form>
<form action="#" className='input-precio'>
  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input className="mdl-textfield__input" type="number" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4" value={precio} onChange={(e)=>handlePrice(e, index)}/>
    <label className="mdl-textfield__label" htmlFor="sample4">Precio $</label>
    <span className="mdl-textfield__error">¡Elige un número!</span>
  </div>
</form>
<div>
  <span>Total: {totalPorProducto}</span>
</div>
{/* <!-- Colored FAB button with ripple --> */}
<div>
<button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={()=>removeProduct(nombre)}>
  <i className="material-icons">remove_shopping_cart</i>
</button>
</div>
    </div>
    </>
  )
}
