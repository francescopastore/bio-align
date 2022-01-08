import * as React from 'react'
import Box from '@mui/material/Box'

export default function MainHeader() {
  return (
    <Box sx={style.container}>
      <img src={process.env.PUBLIC_URL + '/header.png'} alt="header" />
    </Box>
  )
}

const style = {
  container: {
    textAlign: 'center',
    mb: 1,
  },
}
