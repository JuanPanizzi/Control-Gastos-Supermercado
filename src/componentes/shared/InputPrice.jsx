import React from 'react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

export const InputPrice = () => {
  return (
    function Example() {
        const format = (val) => `$` + val
        const parse = (val) => val.replace(/^\$/, '')
      
        const [value, setValue] = React.useState('1.53')
      
        return (
          <NumberInput
            onChange={(valueString) => setValue(parse(valueString))}
            value={format(value)}
            max={50}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        )
      }
  )
}
