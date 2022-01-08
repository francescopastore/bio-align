import * as React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

import GitHubIcon from '@mui/icons-material/GitHub'
import ErrorIcon from '@mui/icons-material/Error'

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
        <Grid item lg={4} xs={10} sx={style.center}>
          <Typography sx={style.text}>
            Made with {heart} using {reactLink} and {muiLink}
          </Typography>
        </Grid>
        <Grid item lg={4} xs={2} sx={style.right}>
          <Tooltip title="Report a bug">
            <IconButton onClick={openReportLink}>
              <ErrorIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Source code">
            <IconButton onClick={openGithubLink}>
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  )
}

function openReportLink(link) {
  window.open(
    'https://github.com/francescopastore/bio-align/issues/new',
    '_blank'
  )
}

function openGithubLink(link) {
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
    ml: 2,
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
}
