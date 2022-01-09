import * as React from 'react'

import Paper from '@mui/material/Paper'

import MainHeader from './AppMainCard/MainHeader'
import MainForm from './AppMainCard/MainForm'
import StringsMatch from './AppMainCard/StringsMatch'

export default function AppMainCard() {
  return (
    <Paper sx={style.container} elevation={4}>
      <MainHeader></MainHeader>
      <MainForm></MainForm>
      <StringsMatch></StringsMatch>
    </Paper>
  )
}

const style = {
  container: {
    minWidth: '400px',
    maxWidth: '500px',
    margin: 'auto',
    p: 3,
  },
}
