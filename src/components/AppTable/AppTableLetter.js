import * as React from 'react'
import Typography from '@mui/material/Typography'
import { blueGrey } from '@mui/material/colors'

import AppTableCard from './AppTableCard'

export default function AppTableLetter(props) {
  return (
    <AppTableCard backgroundColor={blueGrey['A100']}>
      <Typography sx={{ fontWeight: 'bold' }}>{props.letter}</Typography>
    </AppTableCard>
  )
}
