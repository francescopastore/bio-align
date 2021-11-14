import * as React from 'react'
import Paper from '@mui/material/Card'

import AppHeader from './AppHeader'
import FormSelectAlgorithm from './FormSelectAlgorithm'
import FormInputWord from './FormInputWord'
import FormInputNumber from './FormInputNumber'

export default function AppForm() {
  return (
    <div style={appForm}>
      <AppHeader></AppHeader>
      <Paper sx={{ p: 3, width: '20vw' }} elevation="12">
        <FormSelectAlgorithm></FormSelectAlgorithm>
        <FormInputWord></FormInputWord>
        <FormInputWord></FormInputWord>
        <FormInputNumber></FormInputNumber>
        <FormInputNumber></FormInputNumber>
        <FormInputNumber></FormInputNumber>
      </Paper>
    </div>
  )
}

const appForm = {
  position: 'absolute',
  top: '10vh',
  left: '5vw',
}
