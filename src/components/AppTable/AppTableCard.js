import * as React from 'react'
import Paper from '@mui/material/Paper'

export default function AppTableCard(props) {
  style.paper.backgroundColor = props.backgroundColor
  return <Paper sx={style.paper}>{props.children}</Paper>
}

const style = {
  paper: {
    p: 1,
    width: 50,
    height: 50,
    mr: 2,
    mb: 2,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}
