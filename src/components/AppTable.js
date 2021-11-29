import * as React from 'react'

import Box from '@mui/material/Box'

import AppTableLetter from './AppTable/AppTableLetter'
import AppTableNumber from './AppTable/AppTableNumber'

import logic from '../logic'

import { useSelector } from 'react-redux'

export default function AppTable() {
  const form = useSelector((state) => state.form)
  return (
    <Box sx={style.container}>
      {generateTopHeader(form)}
      {generateTable(form)}
    </Box>
  )
}

function generateTable(form) {
  const data = logic.algorithms[form.algorithm].calculate(form)
  let table = []

  data.forEach((row, i) => {
    let tableRow = []

    if (i === 0) {
      tableRow.push(generateHeaderCell('-l', 'left empty', false))
    } else {
      tableRow.push(generateHeaderCell(form.firstString[i], 'left' + i, false))
    }

    row.forEach((cell, j) => {
      tableRow.push(
        <Box key={j}>
          <AppTableNumber cell={cell}></AppTableNumber>
        </Box>
      )
    })

    table.push(
      <Box key={i} sx={style.row}>
        {tableRow}
      </Box>
    )
  })
  return table
}

function generateTopHeader(form) {
  let row = []
  row.push(generateHeaderCell('', 'hidden', true))
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

const style = {
  row: {
    display: 'flex',
  },
}
