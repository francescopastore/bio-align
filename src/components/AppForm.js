import * as React from 'react'

import AppHeader from './AppHeader'
import AppCard from './AppCard'
import FormSelectAlgorithm from './FormSelectAlgorithm'
import FormInputWord from './FormInputWord'
import FormInputNumber from './FormInputNumber'

export default function AppForm() {
  return (
    <div style={appForm}>
      <AppHeader></AppHeader>
      <AppCard>
        <FormSelectAlgorithm></FormSelectAlgorithm>
        <FormInputWord></FormInputWord>
        <FormInputWord></FormInputWord>
        <FormInputNumber></FormInputNumber>
        <FormInputNumber></FormInputNumber>
        <FormInputNumber></FormInputNumber>
      </AppCard>
    </div>
  )
}

const appForm = {
  position: 'absolute',
  top: '10vh',
  left: '5vw',
}
