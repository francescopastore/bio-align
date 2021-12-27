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
  const fontSize = chooseBestFontSize(cell.value)
  const backgroundColor = cell.isPath ? backgroundPath : backgroundCell
  return (
    <AppTableCard backgroundColor={backgroundColor}>
      <Box sx={style.boxNumber}>
        <ArrowUpwardIcon
          sx={{
            transform: 'rotate(-45deg)',
            ...style.arrow,
            visibility: visibility(cell.diag),
          }}
        ></ArrowUpwardIcon>
        <ArrowUpwardIcon
          sx={{ ...style.arrow, visibility: visibility(cell.top) }}
        ></ArrowUpwardIcon>
        <ArrowBackIcon
          sx={{ ...style.arrow, visibility: visibility(cell.left) }}
        ></ArrowBackIcon>
        <Typography sx={{ fontSize, ...style.number }}>{cell.value}</Typography>
      </Box>
    </AppTableCard>
  )
}

function visibility(isVisible) {
  return isVisible ? 'visible' : 'hidden'
}

function chooseBestFontSize(value) {
  const abs = Math.abs(value)
  if (abs >= 100) {
    return 14
  } else if (abs >= 10) {
    return 16
  }
  return 20
}

const style = {
  boxNumber: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  number: {
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 24,
  },
}
