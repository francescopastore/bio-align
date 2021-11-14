import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'

import AppContainer from './AppContainer'

export default function AppForm() {
  const muiLink = (
    <Link underline="none" target="_blank" href="https://mui.com">
      MUI
    </Link>
  )
  const reactLink = (
    <Link underline="none" target="_blank" href="https://reactjs.org/">
      React.js
    </Link>
  )
  const heart = (
    <Typography display="inline" color="red">
      ♥
    </Typography>
  )

  return (
    <AppContainer style={style.container}>
      <Box sx={style.inner}>
        <Box></Box>
        <Box sx={style.center}>
          <Typography sx={style.text}>
            Made with {heart} using {reactLink} and {muiLink}
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
    height: '100%',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
}
