import * as React from 'react'

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
      <FormInputNumber></FormInputNumber>
      <FormInputNumber></FormInputNumber>
      <FormInputNumber></FormInputNumber>
    </AppContainer>
  )
}

function handleFirstWord(value) {
  console.log(value)
}

function handleSecondWord(value) {
  console.log(value)
}
