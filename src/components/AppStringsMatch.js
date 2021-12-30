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
      const letter = generateLetter(match.firstString[i], colorMatch, i)
      firstString.push(letter)
      secondString.push(letter)
    } else if (match.firstString[i] === '-') {
      const letter = generateLetter(match.secondString[i], colorGap, i)
      const letterGap = generateLetter('-', colorGap, i)
      firstString.push(letterGap)
      secondString.push(letter)
    } else if (match.secondString[i] === '-') {
      const letter = generateLetter(match.firstString[i], colorGap, i)
      const letterGap = generateLetter('-', colorGap, i)
      firstString.push(letter)
      secondString.push(letterGap)
    } else {
      firstString.push(generateLetter(match.firstString[i], colorMismatch, i))
      secondString.push(generateLetter(match.secondString[i], colorMismatch, i))
    }
  }

  return (
    <Paper sx={style.container} elevation={4}>
      <Grid container>{firstString}</Grid>
      <Grid container>{secondString}</Grid>
    </Paper>
  )
}

function generateLetter(letter, color, index) {
  return (
    <Grid item key={index}>
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
