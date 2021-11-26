import { createSlice } from '@reduxjs/toolkit'

import logic from '../logic'

const initialState = {
  algorithm: logic.algorithms[0],
  firstString: 'ATTACTC',
  secondString: 'ATATGTC',
  matchWeight: 1,
  mismatchWeight: 2,
  gapWeight: 0,
}

export const form = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAlgorithm: (state, action) => {
      state.algorithm = logic.algorithms[action.payload]
    },
    setFirstString: (state, action) => {
      state.firstWord = action.payload
    },
    setSecondString: (state, action) => {
      state.secondString = action.payload
    },
    setMatchWeight: (state, action) => {
      state.matchWeight = action.payload
    },
    setMismatchWeight: (state, action) => {
      state.mismatchWeight = action.payload
    },
    setGapWeight: (state, action) => {
      state.gapWeight = action.payload
    },
  },
})

export const {
  setAlgorithm,
  setFirstString,
  setSecondString,
  setMatchWeight,
  setMismatchWeight,
  setGapWeight,
} = form.actions

export default form.reducer
