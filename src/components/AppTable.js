import * as React from 'react'

import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import CachedIcon from '@mui/icons-material/Cached'

import AppTableLetter from './AppTable/AppTableLetter'
import AppTableNumber from './AppTable/AppTableNumber'
import AppTableCard from './AppTable/AppTableCard'

import logic from '../logic'

import { setFirstString, setSecondString } from '../store/form'

import { useSelector, useDispatch } from 'react-redux'

import { amber } from '@mui/material/colors'

export default function AppTable() {
  const dispatch = useDispatch()
  const form = useSelector((state) => state.form)
  return (
    <Box sx={style.container}>
      {generateTopHeader(form, dispatch)}
      {generateTable(form)}
    </Box>
  )
}

function generateTable(form) {
  const data = logic.algorithms[form.algorithm].calculate(form)
  let table = []

  let string = '-' + form.firstString

  for (let i = 0; i < string.length; i++) {
    let tableRow = []
    tableRow.push(generateHeaderCell(string[i], 'left' + i, false))

    for (let j = 0; j < data[i].length; j++) {
      tableRow.push(
        <Box key={j}>
          <AppTableNumber cell={data[i][j]}></AppTableNumber>
        </Box>
      )
    }

    table.push(
      <Box key={i} sx={style.row}>
        {tableRow}
      </Box>
    )
  }

  return table
}

function generateTopHeader(form, dispatch) {
  let row = []
  row.push(switchButton(form, dispatch))
  row.push(generateHeaderCell('-', 'top empty', false))
  for (let i = 0; i < form.secondString.length; i++) {
    row.push(generateHeaderCell(form.secondString[i], 'top' + i, false))
  }
  const header = (
    <Box key={'top'} sx={style.row}>
      {row}
    </Box>
  )
  return header
}

function generateHeaderCell(letter, key, isHidden) {
  const sx = {}
  if (isHidden) {
    sx.visibility = 'hidden'
  }
  return (
    <Box key={key} sx={sx}>
      <AppTableLetter letter={letter}></AppTableLetter>
    </Box>
  )
}

function switchButton(form, dispatch) {
  return (
    <Box key="switchButton">
      <AppTableCard backgroundColor={amber['A200']}>
        <IconButton
          data-testid="shuffle-button"
          onClick={() => {
            const firstString = form.firstString
            dispatch(setFirstString(form.secondString))
            dispatch(setSecondString(firstString))
          }}
          size="large"
        >
          <CachedIcon></CachedIcon>
        </IconButton>
      </AppTableCard>
    </Box>
  )
}

const style = {
  row: {
    display: 'flex',
  },
}
