import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import '../styles/AddProduct.css'


//export const AddProduct = ({ addProduct, handleChange, newProduct }) => {

export const AddProduct = ({ addProduct, handleChange, newProduct}) => {


    return (
        <form action="#" onSubmit={(e)=> addProduct(e)}>

        <FormControl w="50%" mt={10} >
            <FormLabel >Ingrese un producto</FormLabel>
            <div className='input-button'>
            <Input type='text' w="50%" borderEndRadius="0" value={newProduct} onChange={(e)=> handleChange(e)} 
            />
            <Button colorScheme='teal' variant='solid' type='submit' borderStartRadius="0">
                <span class="material-icons material-symbols-outlined">
                    add_shopping_cart
                </span>
            </Button>
            </div>

            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        </form>

    )
}