import * as React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'

import { red, green, amber } from '@mui/material/colors'

const colorMismatch = red['A700']
const colorMatch = green['A700']
const colorGap = amber['A700']

export default function AppStringsMatch() {
  const stringsMatch = useSelector((state) => state.app.stringsMatch)
  const firstString = []
  const secondString = []
  for (let i = 0; i < stringsMatch.firstString.length; i++) {
    if (stringsMatch.firstString[i] === stringsMatch.secondString[i]) {
      const letter = generateLetter(stringsMatch.firstString[i], colorMatch, i)
      firstString.push(letter)
      secondString.push(letter)
    } else if (stringsMatch.firstString[i] === '-') {
      const letter = generateLetter(stringsMatch.secondString[i], colorGap, i)
      const letterGap = generateLetter('-', colorGap, i)
      firstString.push(letterGap)
      secondString.push(letter)
    } else if (stringsMatch.secondString[i] === '-') {
      const letter = generateLetter(stringsMatch.firstString[i], colorGap, i)
      const letterGap = generateLetter('-', colorGap, i)
      firstString.push(letter)
      secondString.push(letterGap)
    } else {
      firstString.push(
        generateLetter(stringsMatch.firstString[i], colorMismatch, i)
      )
      secondString.push(
        generateLetter(stringsMatch.secondString[i], colorMismatch, i)
      )
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
