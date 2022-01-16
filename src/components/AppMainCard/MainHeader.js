import * as React from 'react'
import Box from '@mui/material/Box'

export default function MainHeader() {
  return (
    <Box sx={style.container}>
      <img
        style={style.banner}
        src={process.env.PUBLIC_URL + '/header.png'}
        alt="header"
      />
    </Box>
  )
}

const style = {
  container: {
    margin: 'auto',
    maxWidth: '350px',
    mb: 1,
  },
  banner: {
    width: '100%',
  },
}
