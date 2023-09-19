import { useState } from "react"

export function useCart() {

    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState('')
    const [total, setTotal] = useState(null)

    const addProduct = (e) => {
        console.log('producto añadido')
        e.preventDefault()

        if (newProduct.length !== 0 && !products.some((elem)=> elem.nombre === newProduct)) {
            setProducts(prevState => (
                [...prevState,
                { nombre: newProduct, cantidad: 1, precio: 0, totalPorProducto: 0 }]
            ))
        } else if(!products.some((elem)=> elem.nombre === newProduct)){
            alert('Tienes que elegir un producto')
        }else{
            alert('No se puede elegir el mismo producto dos veces')
        }
            setNewProduct('')

    }
    const removeProduct = (nombre) => {

        let productsRemoved = products.filter((elem) => elem.nombre !== nombre)
        setProducts(productsRemoved)
    }
    const handleChange = (e) => {
        setNewProduct(e.target.value.toUpperCase())
    }
    const handleCantidad = (e,index)=>{
        
        let newProducts = [...products]
        let cantidad = e.target.value
        newProducts[index].cantidad = cantidad
        newProducts[index].totalPorProducto =  newProducts[index].precio * cantidad 
        setProducts(newProducts) 
        //console.log(newProducts)
    }
    const handlePrice = (e,index)=>{
        let newPrice = [...products]
        let precioInput = e.target.value
        newPrice[index].precio = precioInput
        newPrice[index].totalPorProducto =  newPrice[index].cantidad * precioInput 
        setProducts(newPrice) 
    }

    return {
        products,
        newProduct,
        addProduct,
        removeProduct,
        handleChange,
        handleCantidad,
        handlePrice,
    }
}
