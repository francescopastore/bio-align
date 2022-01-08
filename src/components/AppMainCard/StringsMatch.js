import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { useSelector } from 'react-redux'

import { red, green, amber } from '@mui/material/colors'

const colorMismatch = red['A700']
const colorMatch = green['A700']
const colorGap = amber['A700']

export default function StringsMatch() {
  const data = useSelector((state) => state.app.stringsMatch)

  const { firstString, secondString } = generateStrings(data)

  return (
    <Grid container spacing={0} sx={style.container}>
      <Grid container item spacing={0} xs={10}>
        <Grid container item spacing={0} sx={style.centered}>
          {firstString}
        </Grid>
        <Grid container item spacing={0} sx={style.centered}>
          {secondString}
        </Grid>
      </Grid>
      <Grid item sx={style.centered} xs={2}>
        <Typography sx={style.score}>{data.score}</Typography>
      </Grid>
    </Grid>
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

function generateStrings(data) {
  const firstString = []
  const secondString = []

  for (let i = 0; i < data.firstString.length; i++) {
    if (data.firstString[i] === data.secondString[i]) {
      // same char, it's a match
      const letter = generateLetter(data.firstString[i], colorMatch, i)
      firstString.push(letter)
      secondString.push(letter)
    } else if (data.firstString[i] === '-') {
      // first char is a gap
      const letter = generateLetter(data.secondString[i], colorGap, i)
      const letterGap = generateLetter('-', colorGap, i)
      firstString.push(letterGap)
      secondString.push(letter)
    } else if (data.secondString[i] === '-') {
      // second char is a gap
      const letter = generateLetter(data.firstString[i], colorGap, i)
      const letterGap = generateLetter('-', colorGap, i)
      firstString.push(letter)
      secondString.push(letterGap)
    } else {
      // different chars, so it's a mismatch
      firstString.push(generateLetter(data.firstString[i], colorMismatch, i))
      secondString.push(generateLetter(data.secondString[i], colorMismatch, i))
    }
  }
  return { firstString, secondString }
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
  score: {
    fontSize: '1.5em',
    fontFamily: 'Courier New',
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
