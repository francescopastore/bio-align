import * as React from 'react'

import Card from '@mui/material/Card'

export default function AppForm() {
  return (
    <Card sx={style.card}>
      <div style={style.text}>Made with ♥ using React.js and MUI</div>
    </Card>
  )
}

const style = {
  card: {
    position: 'absolute',
    top: '98vh',
    left: '5vw',
    width: '90vw',
    height: '10vh',
  },
  text: {
    lineHeight: '10vh',
    textAlign: 'center',
  },
}
