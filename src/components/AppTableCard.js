import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { lime, grey } from '@mui/material/colors'

export default function AppTableCard(props) {
  const value = parseFloat(props.children.value)
  style.paper.backgroundColor = generateColor(value)
  return (
    <Paper sx={style.paper}>
      {isNaN(value)
        ? generateLetterCard(props.children.value)
        : generateNumberCard(value)}
    </Paper>
  )
}

function generateColor(value) {
  if (isNaN(value)) {
    return grey['A100']
  } else {
    return lime['A200']
  }
}

function generateLetterCard(value) {
  return <Typography sx={{ fontWeight: 'bold' }}>{value}</Typography>
}

function generateNumberCard(value) {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}
    >
      <ArrowUpwardIcon sx={{ transform: 'rotate(-45deg)' }}></ArrowUpwardIcon>
      <ArrowUpwardIcon></ArrowUpwardIcon>
      <ArrowBackIcon></ArrowBackIcon>
      <Typography>{value}</Typography>
    </Box>
  )
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
    backgroundColor: '', // to be generated
  },
}
