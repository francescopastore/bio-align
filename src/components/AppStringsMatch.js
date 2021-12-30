import * as React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
// import { useSelector, useDispatch } from 'react-redux'

import { red, green, amber } from '@mui/material/colors'

const colorMismatch = red['A700']
const colorMatch = green['A700']
const colorGap = amber['A700']

export default function AppStringsMatch() {
  // const dispatch = useDispatch()
  // const form = useSelector((state) => state.algorithm)
  // "TTTA" "TCA" -> "TTTA" "-TCA"
  const match = {
    firstString: 'TTTATATA',
    secondString: '-TCA',
  }
  const firstString = []
  const secondString = []

  for (let i = 0; i < match.firstString.length; i++) {
    if (match.firstString[i] === match.secondString[i]) {
      firstString.push(generateMatchLetter(match.firstString[i]))
      secondString.push(generateMatchLetter(match.secondString[i]))
    } else if (match.firstString[i] === '-' || match.secondString[i] === '-') {
      firstString.push(generateGapLetter(match.firstString[i]))
      secondString.push(generateGapLetter(match.secondString[i]))
    } else {
      firstString.push(generateMismatchLetter(match.firstString[i]))
      secondString.push(generateMismatchLetter(match.secondString[i]))
    }
  }

  return (
    <Paper sx={style.container} elevation={4}>
      <Grid container>{firstString}</Grid>
      <Grid container>{secondString}</Grid>
    </Paper>
  )
}

function generateMatchLetter(letter) {
  return generateLetter(letter, colorMatch)
}

function generateMismatchLetter(letter) {
  return generateLetter(letter, colorMismatch)
}

function generateGapLetter(letter) {
  return generateLetter(letter, colorGap)
}

function generateLetter(letter, color) {
  return (
    <Grid item>
      <Typography color={color} sx={style.letter}>
        {letter}
      </Typography>
    </Grid>
  )
}

const style = {
  container: {
    p: 3,
    mt: 3,
  },
  letter: {
    fontSize: '1.5em',
    letterSpacing: '0.5em',
    fontFamily: 'Courier New',
  },
}
