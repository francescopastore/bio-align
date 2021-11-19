import * as React from 'react'

import Paper from '@mui/material/Paper'

export default function AppHeader(props) {
  return (
    <Paper
      sx={{ p: 1, width: props.width, height: props.height }}
      elevation={4}
    >
      <img
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
        src={process.env.PUBLIC_URL + '/header.png'}
        alt="header"
      />
    </Paper>
  )
}
