import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import AppContainer from './AppContainer'

import FormSelectAlgorithm from './AppForm/FormSelectAlgorithm'
import FormInputWord from './AppForm/FormInputWord'
import FormInputNumber from './AppForm/FormInputNumber'

export default function AppForm() {
  return (
    <AppContainer>
      <FormSelectAlgorithm></FormSelectAlgorithm>
      <FormInputWord
        label="First word"
        defaultValue="ATTACTC"
        handleChange={handleFirstWord}
      ></FormInputWord>
      <FormInputWord
        label="Second word"
        defaultValue="ATATGTC"
        handleChange={handleSecondWord}
      ></FormInputWord>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <FormInputNumber
          label="Match"
          defaultValue="-2"
          handleChange={handleSecondWord}
          style={{ mr: 2 }}
        ></FormInputNumber>
        <FormInputNumber
          label="Mismatch"
          defaultValue="1"
          handleChange={handleSecondWord}
          style={{ mr: 2 }}
        ></FormInputNumber>
        <FormInputNumber
          label="Gap"
          defaultValue="-1"
          handleChange={handleSecondWord}
        ></FormInputNumber>
      </Box>
      <Typography variant="caption">
        Only numbers between -10 and 10 are allowed
      </Typography>
    </AppContainer>
  )
}

function handleFirstWord(value) {
  console.log(value)
}

function handleSecondWord(value) {
  console.log(value)
}
