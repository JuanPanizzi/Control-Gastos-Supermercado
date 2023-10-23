import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import '../styles/AddProduct.css'

//export const AddProduct = ({ addProduct, handleChange, newProduct }) => {

export const AddProduct = ({ addProduct, handleChange, newProduct}) => {


    return (


        <FormControl py={4} my={5}   >
        <form action="#" onSubmit={(e)=> addProduct(e)} className='form-control-child'>
            <FormLabel textAlign="center" fontWeight="bold" >Ingrese un producto</FormLabel>
            <div className='input-button'>
            <Input type='text'  w={["80%","60%", "40%" ]} fontSize={["0.8rem", "1rem"]} borderEndRadius="0" value={newProduct} onChange={(e)=> handleChange(e)} 
            />
            <Button colorScheme='teal' variant='solid' type='submit' borderStartRadius="0">
                <span class="material-icons material-symbols-outlined">
                    add_shopping_cart
                </span>
            </Button>
            </div>
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </form>
        </FormControl>

    )
}