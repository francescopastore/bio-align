import React from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import AppTable from './components/AppTable'
import AppFooter from './components/AppFooter'
import AppMainCard from './components/AppMainCard'

export default function App() {
  return (
    <>
      <Grid container spacing={2} sx={style.container}>
        <Grid item xs={12} lg={5} sx={style.form}>
          <AppMainCard></AppMainCard>
        </Grid>
        <Grid item xs={12} lg={7} sx={style.table}>
          <AppTable></AppTable>
        </Grid>
      </Grid>
      <Box sx={style.footer}>
        <AppFooter></AppFooter>
      </Box>
    </>
  )
}

const style = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: 3,
  },
  footer: {
    paddingBottom: '3vh',
    paddingLeft: '2vw',
    paddingRight: '2vw',
  },
}
