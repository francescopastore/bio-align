import React from 'react'

import Box from '@mui/material/Box'

import AppHeader from './components/AppHeader.js'
import AppForm from './components/AppForm.js'
import AppTable from './components/AppTable.js'
import AppFooter from './components/AppFooter.js'

function App() {
  return (
    <>
      <Box sx={style.headerContainer}>
        <Box sx={style.inner}>
          <AppHeader
            width={style.headerContainer.width}
            height={style.headerContainer.height}
          ></AppHeader>
        </Box>
      </Box>
      <Box sx={style.leftContainer}>
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
  headerContainer: {
    position: 'absolute',
    top: '10vh',
    left: '8.5vw',
    width: '18vw',
    height: '10vh',
  },
  leftContainer: {
    position: 'absolute',
    top: '25vh',
    left: '5vw',
    width: '25vw',
  },
  rightContainer: {
    position: 'absolute',
    top: '10vh',
    left: '35vw',
    width: '60vw',
  },
  inner: {
    mb: 3,
  },
}

export default App
