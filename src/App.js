import React from 'react'

import Box from '@mui/material/Box'

import AppHeader from './components/AppHeader.js'
import AppForm from './components/AppForm.js'
import AppFooter from './components/AppFooter.js'

function App() {
  return (
    <>
      <Box sx={style.container}>
        <Box sx={style.inner}>
          <AppHeader></AppHeader>
        </Box>
        <AppForm></AppForm>
      </Box>
      <AppFooter></AppFooter>
    </>
  )
}

const style = {
  container: {
    position: 'absolute',
    top: '10vh',
    left: '5vw',
    width: '20vw',
  },
  inner: {
    mb: 3,
  },
}

export default App
