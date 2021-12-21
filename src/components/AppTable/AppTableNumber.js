import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { yellow, grey } from '@mui/material/colors'

import AppTableCard from './AppTableCard'

const backgroundCell = grey['A100']
const backgroundPath = yellow['A200']

export default function AppTableNumber(props) {
  const cell = props.cell
  const fontSize = 24
  const backgroundColor = cell.isPath ? backgroundPath : backgroundCell
  return (
    <AppTableCard backgroundColor={backgroundColor}>
      <Box sx={style.boxNumber}>
        <ArrowUpwardIcon
          sx={{
            transform: 'rotate(-45deg)',
            fontSize,
            visibility: visibility(cell.diag),
          }}
        ></ArrowUpwardIcon>
        <ArrowUpwardIcon
          sx={{ fontSize, visibility: visibility(cell.top) }}
        ></ArrowUpwardIcon>
        <ArrowBackIcon
          sx={{ fontSize, visibility: visibility(cell.left) }}
        ></ArrowBackIcon>
        <Typography variant="h6">{cell.value}</Typography>
      </Box>
    </AppTableCard>
  )
}

function visibility(value) {
  if (value) {
    return 'visible'
  } else {
    return 'hidden'
  }
}

const style = {
  boxNumber: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
}
