import * as React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'

import GitHubIcon from '@mui/icons-material/GitHub'

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

export default function AppFooter() {
  return (
    <Paper elevation={4}>
      <Grid container sx={style.container}>
        <Grid item lg={4} xs={0}></Grid>
        <Grid item lg={4} xs={11} sx={style.center}>
          <Typography sx={style.text}>
            Made with {heart} using {reactLink} and {muiLink}
          </Typography>
        </Grid>
        <Grid item lg={4} xs={1} sx={style.right}>
          <GitHubIcon sx={style.icon} fontSize="large" onClick={openGithub} />
        </Grid>
      </Grid>
    </Paper>
  )
}

function openGithub() {
  window.open('https://github.com/francescopastore/bio-align', '_blank')
}

const style = {
  container: {
    p: 4,
    alignItems: 'center',
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
