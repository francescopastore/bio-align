import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { yellow, grey } from '@mui/material/colors'

const backgroundLetter = grey['A100']
const backgroundNumber = grey['A100']
const backgroundPath = yellow['A200']

export default function AppTableCard(props) {
  return isNaN(parseInt(props.cell.value))
    ? generateLetterCard(props.cell)
    : generateNumberCard(props.cell)
}

function generateLetterCard(cell) {
  setBackgroundColor(backgroundLetter)
  return (
    <Paper sx={style.paper}>
      <Typography sx={{ fontWeight: 'bold' }}>{cell.value}</Typography>
    </Paper>
  )
}

function generateNumberCard(cell) {
  const fontSize = 24
  setBackgroundColor(cell.isPath ? backgroundPath : backgroundNumber)
  return (
    <Paper sx={style.paper}>
      <Box sx={style.boxNumber}>
        <ArrowUpwardIcon
          sx={{
            transform: 'rotate(-45deg)',
            fontSize,
            visibility: visibility(cell.diag),
          }}
        ></ArrowUpwardIcon>
        <ArrowUpwardIcon
          sx={{ fontSize, visibility: visibility(cell.top) }}
        ></ArrowUpwardIcon>
        <ArrowBackIcon
          sx={{ fontSize, visibility: visibility(cell.left) }}
        ></ArrowBackIcon>
        <Typography variant="h6">{cell.value}</Typography>
      </Box>
    </Paper>
  )
}

function visibility(value) {
  if (value) {
    return 'visible'
  } else {
    return 'hidden'
  }
}

function setBackgroundColor(value) {
  style.paper.backgroundColor = value
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
  boxNumber: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
}
