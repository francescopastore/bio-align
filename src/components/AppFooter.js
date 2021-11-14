import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'

import AppContainer from './AppContainer'

export default function AppForm() {
  return (
    <AppContainer style={style.container}>
      <Box sx={style.inner}>
        <Box></Box>
        <Box sx={style.center}>
          <Typography sx={style.text}>
            Made with ♥ using React.js and MUI
          </Typography>
        </Box>
        <Box sx={style.right}>
          <GitHubIcon sx={style.icon} fontSize="large" onClick={openGithub} />
        </Box>
      </Box>
    </AppContainer>
  )
}

function openGithub() {
  window.open('https://github.com/francescopastore/bio-align', '_blank')
}

const style = {
  container: {
    position: 'absolute',
    top: '98vh',
    left: '5vw',
    width: '90vw',
    height: '5vh',
  },
  inner: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  text: {
    lineHeight: '5vh',
  },
  icon: {
    cursor: 'pointer',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
}
