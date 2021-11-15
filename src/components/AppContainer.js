import * as React from 'react'
import Paper from '@mui/material/Paper'

export default function AppContainer(props) {
  return (
    <Paper sx={{ p: 3, ...props.style }} elevation={4}>
      {props.children}
    </Paper>
  )
}
