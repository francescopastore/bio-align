import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputAdornment from '@mui/material/InputAdornment'

import FunctionsIcon from '@mui/icons-material/Functions'

export default function FormSelectAlgorithm(props) {
  const [algorithm, setAlgorithm] = React.useState(props.default)

  const handle = (event) => {
    const value = event.target.value
    setAlgorithm(value)
    props.handle(value)
  }

  const options = props.options.map((v, i) => {
    return (
      <MenuItem key={i} value={i}>
        {v.label}
      </MenuItem>
    )
  })

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="algorithm-label">Algorithm</InputLabel>
      <Select
        labelId="algorithm-label"
        id="algorithm"
        label="Algorithm"
        value={algorithm}
        onChange={handle}
        data-testid="value-input"
        startAdornment={
          <InputAdornment position="start">
            <FunctionsIcon />
          </InputAdornment>
        }
      >
        {options}
      </Select>
    </FormControl>
  )
}
