import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Paper from '@mui/material/Paper'

import FormSelectAlgorithm from './AppForm/FormSelectAlgorithm'
import FormInputWord from './AppForm/FormInputWord'
import FormInputNumber from './AppForm/FormInputNumber'

import logic from '../logic'

// change here default values
const data = {
  algorithm: logic.algorithms[0],
  firstWord: 'ATTACTC',
  secondWord: 'ATATGTC',
  matchWeight: 1,
  mismatchWeight: 2,
  gapWeight: 0,
}

export default function AppForm() {
  return (
    <Paper sx={style.container} elevation={4}>
      <FormSelectAlgorithm
        options={logic.algorithms}
        default={data.algorithm}
        handle={(v) => {
          data.algorithm = v
          console.log(data)
        }}
      ></FormSelectAlgorithm>
      <FormInputWord
        label="First word"
        default={data.firstWord}
        handle={(v) => {
          data.firstWord = v
          console.log(data)
        }}
      ></FormInputWord>
      <FormInputWord
        label="Second word"
        default={data.secondWord}
        handle={(v) => (data.secondWord = v)}
      ></FormInputWord>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <FormInputNumber
          label="Match"
          default={data.matchWeight}
          handle={(v) => (data.matchWeight = v)}
          style={{ mr: 2 }}
        ></FormInputNumber>
        <FormInputNumber
          label="Mismatch"
          default={data.mismatchWeight}
          handle={(v) => (data.mismatchWeight = v)}
          style={{ mr: 2 }}
        ></FormInputNumber>
        <FormInputNumber
          label="Gap"
          default={data.gapWeight}
          handle={(v) => (data.gapWeight = v)}
        ></FormInputNumber>
      </Box>
      <Typography variant="caption">
        Only weights between -10 and 10 are allowed
      </Typography>
    </Paper>
  )
}

const style = {
  container: {
    p: 3,
  },
}
