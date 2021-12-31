import * as React from 'react'
import Typography from '@mui/material/Typography'
import { blueGrey } from '@mui/material/colors'

import CellCard from './CellCard'

export default function CellLetter(props) {
  return (
    <CellCard backgroundColor={blueGrey['A100']}>
      <Typography sx={{ fontWeight: 'bold' }}>{props.letter}</Typography>
    </CellCard>
  )
}
