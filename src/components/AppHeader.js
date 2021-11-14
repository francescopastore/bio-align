import * as React from 'react'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import AppContainer from './AppContainer'

export default function AppHeader() {
  return (
    <AppContainer>
      <Box sx={style.container}>
        <Avatar
          sx={style.logo}
          src={process.env.PUBLIC_URL + '/icon.png'}
          alt="app icon"
        />
        <Typography sx={style.title} variant="h3" component="h1">
          BioAlign
        </Typography>
      </Box>
    </AppContainer>
  )
}

const height = '80px'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: height,
    height: height,
  },
  title: {
    lineHeight: height,
  },
}
