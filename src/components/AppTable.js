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
    tableRow.push(generateHeaderCell(form.secondString[i], 'left' + i, false))

    row.forEach((cell, colIndex) => {
      tableRow.push(
        <Box key={colIndex}>
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
  for (let i = 0; i < form.firstString.length; i++) {
    row.push(generateHeaderCell(form.firstString[i], 'top' + i, false))
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
