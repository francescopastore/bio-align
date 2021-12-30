import * as React from 'react'

import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import CachedIcon from '@mui/icons-material/Cached'

import AppTableLetter from './AppTable/AppTableLetter'
import AppTableNumber from './AppTable/AppTableNumber'
import AppTableCard from './AppTable/AppTableCard'

import { setFirstString, setSecondString } from '../store/app'

import { useSelector, useDispatch } from 'react-redux'

import { amber } from '@mui/material/colors'

export default function AppTable() {
  const dispatch = useDispatch()
  const appData = useSelector((state) => state.app)
  return (
    <Box sx={style.container}>
      {generateTopHeader(appData, dispatch)}
      {generateTable(appData)}
    </Box>
  )
}

function generateTable(app) {
  const solution = app.solution
  let table = []

  let string = '-' + app.data.firstString

  for (let i = 0; i < string.length; i++) {
    let tableRow = []
    tableRow.push(generateHeaderCell(string[i], 'left' + i, false))

    for (let j = 0; j < solution[i].length; j++) {
      tableRow.push(
        <Box key={j}>
          <AppTableNumber cell={solution[i][j]}></AppTableNumber>
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

function generateTopHeader(app, dispatch) {
  let row = []
  row.push(switchButton(app, dispatch))
  row.push(generateHeaderCell('-', 'top empty', false))
  for (let i = 0; i < app.data.secondString.length; i++) {
    row.push(generateHeaderCell(app.data.secondString[i], 'top' + i, false))
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

function switchButton(app, dispatch) {
  return (
    <Box key="switchButton">
      <AppTableCard backgroundColor={amber['A200']}>
        <IconButton
          data-testid="shuffle-button"
          onClick={() => {
            const firstString = app.data.firstString
            dispatch(setFirstString(app.data.secondString))
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
  container: {
    overflow: 'auto',
    my: 3,
  },
  row: {
    display: 'flex',
  },
}
