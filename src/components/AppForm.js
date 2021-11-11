import * as React from 'react'

import AppHeader from './AppHeader'
import AppCard from './AppCard'
import FormSelectAlgorithm from './FormSelectAlgorithm'
import FormInputWord from './FormInputWord'

export default function AppForm() {
  return (
    <div style={appForm}>
      <AppHeader></AppHeader>
      <AppCard>
        <FormSelectAlgorithm></FormSelectAlgorithm>
        <FormInputWord></FormInputWord>
        <FormInputWord></FormInputWord>
      </AppCard>
    </div>
  )
}

const appForm = {
  position: 'absolute',
  top: '10vh',
  left: '10vw',
}
