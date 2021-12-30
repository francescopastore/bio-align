import { createSlice } from '@reduxjs/toolkit'

import logic from '../logic'

const defaultAlgorithm = logic.algorithms[0]

const defaultForm = {
  algorithm: 0,
  firstString: 'ATTACTC',
  secondString: 'ATATGTC',
  ...defaultAlgorithm.defaultForm,
}

const defaultSolution = defaultAlgorithm.calculate(defaultForm)

const initialState = {
  form: defaultForm,
  solution: defaultSolution,
  stringsMatch: logic.stringsMatch(defaultForm, defaultSolution),
}

export const app = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAlgorithm: (state, action) => {
      state.form.algorithm = action.payload
      const algorithm = logic.algorithms[state.form.algorithm]
      state.form = Object.assign(state.form, algorithm.defaultForm)
      state = recalculate(state)
    },
    setFirstString: (state, action) => {
      state.form.firstString = action.payload
      state = recalculate(state)
    },
    setSecondString: (state, action) => {
      state.form.secondString = action.payload
      state = recalculate(state)
    },
    setMatchWeight: (state, action) => {
      state.form.matchWeight = action.payload
      state = recalculate(state)
    },
    setMismatchWeight: (state, action) => {
      state.form.mismatchWeight = action.payload
      state = recalculate(state)
    },
    setGapWeight: (state, action) => {
      state.form.gapWeight = action.payload
      state = recalculate(state)
    },
  },
})

function recalculate(state) {
  const algorithm = logic.algorithms[state.form.algorithm]
  state.solution = algorithm.calculate(state.form)
  state.stringsMatch = logic.stringsMatch(state.form, state.solution)
  return state
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
