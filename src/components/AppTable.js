import * as React from 'react'

import Box from '@mui/material/Box'
import AppTableCard from './AppTableCard'

const data = [
  [1, 2, 3, 4, 2, 3, 4],
  [1, 2, 3, 4, 2, 3, 4],
  [1, 2, 3, 4, 2, 3, 4],
  [1, 2, 3, 4, 2, 3, 4],
  [1, 2, 3, 4, 2, 3, 4],
  [1, 2, 3, 4, 2, 3, 4],
  [1, 2, 3, 4, 2, 3, 4],
]

export default function AppTable(props) {
  let table = generateTable(data)

  return <Box sx={style.container}>{table}</Box>
}

function generateTable(data) {
  let table = []
  data.forEach((row, rowIndex) => {
    let tableRow = []
    let baseIndex = rowIndex * data[0].length

    row.forEach((col, colIndex) => {
      tableRow.push(
        <AppTableCard key={baseIndex + colIndex}>{col}</AppTableCard>
      )
    })

    table.push(<Box sx={style.row}>{tableRow}</Box>)
  })
  return table
}

const style = {
  container: {},
  row: {
    display: 'flex',
    mb: 3,
  },
}
