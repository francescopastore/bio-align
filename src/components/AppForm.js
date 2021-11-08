import * as React from 'react'
import AppHeader from './AppHeader'
import AppCard from './AppCard'
import FormSelectAlgorithm from './FormSelectAlgorithm'

export default function AppForm() {
  return (
    <div style={appForm}>
      <AppHeader></AppHeader>
      <FormSelectAlgorithm>Test</FormSelectAlgorithm>
      <AppCard>Test</AppCard>
      <AppCard>Test</AppCard>
    </div>
  )
}

const appForm = {
  position: 'absolute',
  top: '10vh',
  left: '10vw',
}
