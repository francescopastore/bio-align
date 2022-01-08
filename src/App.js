import React from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import AppForm from './components/AppForm.js'
import AppTable from './components/AppTable.js'
import AppFooter from './components/AppFooter.js'
import AppStringsMatch from './components/AppStringsMatch.js'

import { useTheme } from '@mui/material/styles'

export default function App() {
  const theme = useTheme()
  return (
    <>
      <Grid container spacing={2} sx={style.container}>
        <Grid item sx={offset(theme)} lg></Grid>
        <Grid item xs={12} md={4} lg={3} sx={style.centered}>
          <AppForm></AppForm>
          <AppStringsMatch></AppStringsMatch>
        </Grid>
        <Grid item sx={offset(theme)} lg></Grid>
        <Grid item xs={12} md={8} lg={6} sx={style.centered}>
          <AppTable></AppTable>
        </Grid>
        <Grid item sx={offset(theme)} lg></Grid>
      </Grid>
      <Box sx={style.footer}>
        <AppFooter></AppFooter>
      </Box>
    </>
  )
}

const offset = (theme) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
})

const style = {
  container: {
    minHeight: '100vh',
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingBottom: '3vh',
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
}
