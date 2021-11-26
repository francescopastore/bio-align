import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import FormSelectAlgorithm from './AppForm/FormSelectAlgorithm'
import FormInputString from './AppForm/FormInputString'
import FormInputNumber from './AppForm/FormInputNumber'

import logic from '../logic'

import { useSelector, useDispatch } from 'react-redux'

import {
  setAlgorithm,
  setFirstString,
  setSecondString,
  setMatchWeight,
  setMismatchWeight,
  setGapWeight,
} from '../store/form'

export default function AppForm() {
  const dispatch = useDispatch()
  // change here default values
  const data = useSelector((state) => state.form)
  return (
    <Paper sx={style.container} elevation={4}>
      <FormSelectAlgorithm
        options={logic.algorithms}
        default={0}
        handle={(v) => dispatch(setAlgorithm(v))}
      ></FormSelectAlgorithm>
      <FormInputString
        label="First string"
        default={data.firstString}
        handle={(v) => dispatch(setFirstString(v))}
      ></FormInputString>
      <FormInputString
        label="Second string"
        default={data.secondString}
        handle={(v) => dispatch(setSecondString(v))}
      ></FormInputString>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <FormInputNumber
          label="Match"
          default={data.matchWeight}
          handle={(v) => dispatch(setMatchWeight(v))}
          style={{ mr: 2 }}
        ></FormInputNumber>
        <FormInputNumber
          label="Mismatch"
          default={data.mismatchWeight}
          handle={(v) => dispatch(setMismatchWeight(v))}
          style={{ mr: 2 }}
        ></FormInputNumber>
        <FormInputNumber
          label="Gap"
          default={data.gapWeight}
          handle={(v) => dispatch(setGapWeight(v))}
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
