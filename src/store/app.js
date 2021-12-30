import { createSlice } from '@reduxjs/toolkit'

import logic from '../logic'

const defaultAlgorithm = logic.algorithms[0]

const defaultData = {
  algorithm: 0,
  firstString: 'ATTACTC',
  secondString: 'ATATGTC',
  disableWeights: defaultAlgorithm.disableWeights,
  matchWeight: defaultAlgorithm.matchWeight,
  mismatchWeight: defaultAlgorithm.mismatchWeight,
  gapWeight: defaultAlgorithm.gapWeight,
}

const initialState = {
  data: {
    ...defaultData,
  },
  solution: defaultAlgorithm.calculate(defaultData),
}

export const app = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAlgorithm: (state, action) => {
      const algorithm = action.payload
      state.algorithm = algorithm
      state.data = Object.assign(state.data, logic.algorithms[algorithm])
      state.solution = logic.algorithms[algorithm].calculate(state.data)
    },
    setFirstString: (state, action) => {
      state.data.firstString = action.payload
    },
    setSecondString: (state, action) => {
      state.data.secondString = action.payload
    },
    setMatchWeight: (state, action) => {
      state.data.matchWeight = action.payload
    },
    setMismatchWeight: (state, action) => {
      state.data.mismatchWeight = action.payload
    },
    setGapWeight: (state, action) => {
      state.data.gapWeight = action.payload
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
} = app.actions

export default app.reducer
