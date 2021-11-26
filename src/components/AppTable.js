import * as React from 'react'

import Box from '@mui/material/Box'

import AppTableCard from './AppTableCard'

import logic from '../logic'

import { useSelector } from 'react-redux'

export default function AppTable() {
  const form = useSelector((state) => state.form)
  const data = logic.algorithms[form.algorithm].calculate(form)
  let table = generateTable(data)

  return <Box sx={style.container}>{table}</Box>
}

function generateTable(data) {
  let table = []
  data.forEach((row, rowIndex) => {
    let tableRow = []

    row.forEach((col, colIndex) => {
      const cell = <AppTableCard>{col}</AppTableCard>
      const visibility = colIndex === 0 && rowIndex === 0 ? 'hidden' : 'visible'
      // hide first cell
      tableRow.push(
        <Box key={colIndex} style={{ visibility: visibility }}>
          {cell}
        </Box>
      )
    })

    table.push(
      <Box key={rowIndex} sx={style.row}>
        {tableRow}
      </Box>
    )
  })
  return table
}

const style = {
  container: {},
  row: {
    display: 'flex',
  },
}
