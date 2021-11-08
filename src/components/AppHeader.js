import * as React from 'react'
import Typography from '@mui/material/Typography'

import AppCard from './AppCard'

export default function AppHeader() {
  return (
    <AppCard>
      <img
        style={style.logo}
        src={process.env.PUBLIC_URL + '/icon.png'}
        alt="app icon"
        width="124px"
      ></img>
      <Typography style={style.title} variant="h3" component="h1">
        BioAlign
      </Typography>
    </AppCard>
  )
}

const style = {
  logo: {
    float: 'left',
  },
  title: {
    lineHeight: '124px',
  },
}
