import * as React from 'react'
import Typography from '@mui/material/Typography'

import AppContainer from './AppContainer'

export default function AppTableCard(props) {
  const value = parseFloat(props.children.value)

  return (
    <AppContainer style={{ width: 20, mr: 3 }}>
      {isNaN(value) ? (
        <Typography align="center" sx={{ fontWeight: 'bold' }}>
          {props.children.value}
        </Typography>
      ) : (
        <Typography align="center">{value}</Typography>
      )}
    </AppContainer>
  )
}
