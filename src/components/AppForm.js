import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import SelectAlgorithm from './AppForm/SelectAlgorithm'
import HeaderMain from './AppForm/HeaderMain'
import InputString from './AppForm/InputString'
import InputNumber from './AppForm/InputNumber'

import logic from '../logic'

import { useSelector, useDispatch } from 'react-redux'

import {
  setAlgorithm,
  setFirstString,
  setSecondString,
  setMatchWeight,
  setMismatchWeight,
  setGapWeight,
} from '../store/app'

export default function AppForm() {
  const dispatch = useDispatch()
  // change here default values
  const data = useSelector((state) => state.app.form)
  return (
    <Paper sx={style.container} elevation={4}>
      <HeaderMain></HeaderMain>
      <SelectAlgorithm
        options={logic.algorithms}
        default={0}
        handle={(v) => dispatch(setAlgorithm(v))}
      ></SelectAlgorithm>
      <InputString
        label="First string"
        default={data.firstString}
        handle={(v) => dispatch(setFirstString(v))}
      ></InputString>
      <InputString
        label="Second string"
        default={data.secondString}
        handle={(v) => dispatch(setSecondString(v))}
      ></InputString>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <InputNumber
          label="Match"
          default={data.matchWeight}
          handle={(v) => dispatch(setMatchWeight(v))}
          disabled={data.disableWeights}
          style={{ mr: 2 }}
        ></InputNumber>
        <InputNumber
          label="Mismatch"
          default={data.mismatchWeight}
          handle={(v) => dispatch(setMismatchWeight(v))}
          disabled={data.disableWeights}
          style={{ mr: 2 }}
        ></InputNumber>
        <InputNumber
          label="Gap"
          default={data.gapWeight}
          handle={(v) => dispatch(setGapWeight(v))}
          disabled={data.disableWeights}
        ></InputNumber>
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
    width: '100%',
  },
}
