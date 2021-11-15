import React from 'react'

import Box from '@mui/material/Box'

import AppHeader from './components/AppHeader.js'
import AppForm from './components/AppForm.js'
import AppTable from './components/AppTable.js'
import AppFooter from './components/AppFooter.js'

function App() {
  return (
    <>
      <Box sx={style.leftContainer}>
        <Box sx={style.inner}>
          <AppHeader></AppHeader>
        </Box>
        <AppForm></AppForm>
      </Box>
      <Box sx={style.rightContainer}>
        <AppTable></AppTable>
      </Box>
      <AppFooter></AppFooter>
    </>
  )
}

const style = {
  leftContainer: {
    position: 'absolute',
    top: '10vh',
    left: '5vw',
    width: '20vw',
  },
  rightContainer: {
    position: 'absolute',
    top: '10vh',
    left: '30vw',
    width: '65vw',
  },
  inner: {
    mb: 3,
  },
}

export default App
