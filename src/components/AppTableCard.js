import * as React from 'react'

import AppContainer from './AppContainer'

export default function AppTableCard(props) {
  return (
    <AppContainer style={{ width: 20, mr: 3 }}>
      {props.children.value}
    </AppContainer>
  )
}
