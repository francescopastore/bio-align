import { createSlice } from '@reduxjs/toolkit'

import logic from '../logic'

const initialState = {
  algorithm: 0,
  firstString: 'ATTACTC',
  secondString: 'ATATGTC',
  matchWeight: logic.algorithms[0].matchWeight,
  mismatchWeight: logic.algorithms[0].mismatchWeight,
  gapWeight: logic.algorithms[0].gapWeight,
}

export const form = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAlgorithm: (state, action) => {
      state.algorithm = action.payload
      state.matchWeight = logic.algorithms[state.algorithm].matchWeight
      state.mismatchWeight = logic.algorithms[state.algorithm].mismatchWeight
      state.gapWeight = logic.algorithms[state.algorithm].gapWeight
    },
    setFirstString: (state, action) => {
      state.firstString = action.payload
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
