import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'

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
  // using link to avoid bad p nesting
  const heart = (
    <Link underline="none" display="inline" color="red">
      ♥
    </Link>
  )

  return (
    <Paper sx={style.container} elevation={4}>
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
    </Paper>
  )
}

function openGithub() {
  window.open('https://github.com/francescopastore/bio-align', '_blank')
}

const style = {
  container: {
    p: 3,
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
