import { createSlice } from '@reduxjs/toolkit'

import logic from '../logic'

const defaultAlgorithm = logic.algorithms[0]

const defaultData = {
  algorithm: 0,
  firstString: 'ATTACTC',
  secondString: 'ATATGTC',
  ...defaultAlgorithm.defaultData,
}

const initialState = {
  form: defaultData,
  solution: defaultAlgorithm.calculate(defaultData),
  stringsMatch: defaultAlgorithm.stringsMatch(defaultData),
}

export const app = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAlgorithm: (state, action) => {
      state.form.algorithm = action.payload
      const algorithm = logic.algorithms[state.form.algorithm]
      state.form = Object.assign(state.form, algorithm.defaultData)
      state.solution = recalculate(state)
    },
    setFirstString: (state, action) => {
      state.form.firstString = action.payload
      state.solution = recalculate(state)
    },
    setSecondString: (state, action) => {
      state.form.secondString = action.payload
      state.solution = recalculate(state)
    },
    setMatchWeight: (state, action) => {
      state.form.matchWeight = action.payload
      state.solution = recalculate(state)
    },
    setMismatchWeight: (state, action) => {
      state.form.mismatchWeight = action.payload
      state.solution = recalculate(state)
    },
    setGapWeight: (state, action) => {
      state.form.gapWeight = action.payload
      state.solution = recalculate(state)
    },
  },
})

function recalculate(state) {
  return logic.algorithms[state.form.algorithm].calculate(state.form)
}

export const {
  setAlgorithm,
  setFirstString,
  setSecondString,
  setMatchWeight,
  setMismatchWeight,
  setGapWeight,
} = app.actions

export default app.reducer
