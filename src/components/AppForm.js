import * as React from 'react'

import AppContainer from './AppContainer'

import FormSelectAlgorithm from './AppForm/FormSelectAlgorithm'
import FormInputWord from './AppForm/FormInputWord'
import FormInputNumber from './AppForm/FormInputNumber'

export default function AppForm() {
  return (
    <AppContainer>
      <FormSelectAlgorithm></FormSelectAlgorithm>
      <FormInputWord></FormInputWord>
      <FormInputWord></FormInputWord>
      <FormInputNumber></FormInputNumber>
      <FormInputNumber></FormInputNumber>
      <FormInputNumber></FormInputNumber>
    </AppContainer>
  )
}
