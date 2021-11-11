import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import MuiInput from '@mui/material/Input'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'

const Input = styled(MuiInput)`
  width: 42px;
`

export default function FormInputNumber() {
  const [value, setValue] = React.useState(0)

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value))
  }

  const handleBlur = () => {
    if (value < 0) {
      setValue(0)
    } else if (value > 10) {
      setValue(1)
    }
  }

  return (
    <Box sx={{ mb: 3 }}>
      <Typography id="input-slider" gutterBottom>
        Weight
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <SwapHorizIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            defaultValue={30}
            step={1}
            min={-10}
            max={+10}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            variant="outlined"
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: -10,
              max: 10,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
