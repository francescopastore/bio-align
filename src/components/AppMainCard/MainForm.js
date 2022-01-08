import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import SelectAlgorithm from './MainForm/SelectAlgorithm'
import InputString from './MainForm/InputString'
import InputNumber from './MainForm/InputNumber'

import logic from '../../logic'

import { useSelector, useDispatch } from 'react-redux'

import {
  setAlgorithm,
  setFirstString,
  setSecondString,
  setMatchWeight,
  setMismatchWeight,
  setGapWeight,
} from '../../store/app'

export default function AppForm() {
  const dispatch = useDispatch()
  // change here default values
  const data = useSelector((state) => state.app.form)
  return (
    <>
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
    </>
  )
}
